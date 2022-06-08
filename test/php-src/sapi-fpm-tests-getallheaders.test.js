// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // sapi/fpm/tests/getallheaders.phpt
  it("FPM: Function getallheaders basic test", function () {
    expect(parser.parseCode("<?php\nrequire_once \"tester.inc\";\n$cfg = <<<EOT\n[global]\nerror_log = {{FILE:LOG}}\n[unconfined]\nlisten = {{ADDR}}\npm = dynamic\npm.max_children = 5\npm.start_servers = 1\npm.min_spare_servers = 1\npm.max_spare_servers = 3\nEOT;\n$code = <<<EOT\n<?php\necho \"Test Start\\n\";\nvar_dump(getallheaders());\necho \"Test End\\n\";\nEOT;\n$headers = [];\n$tester = new FPM\\Tester($cfg, $code);\n$tester->start();\n$tester->expectLogStartNotices();\n$tester->request(\n        '',\n        [\n            'HTTP_X_FOO' => 'BAR',\n            'HTTP_FOO'   => 'foo'\n        ]\n    )->expectBody(\n        [\n            'Test Start',\n            'array(4) {',\n            '  [\"Foo\"]=>',\n            '  string(3) \"foo\"',\n            '  [\"X-Foo\"]=>',\n            '  string(3) \"BAR\"',\n            '  [\"Content-Length\"]=>',\n            '  string(1) \"0\"',\n            '  [\"Content-Type\"]=>',\n            '  string(0) \"\"',\n            '}',\n            'Test End',\n        ]\n    );\n$tester->terminate();\n$tester->expectLogTerminatingNotices();\n$tester->close();\n?>\nDone")).toMatchSnapshot();
  });
});
