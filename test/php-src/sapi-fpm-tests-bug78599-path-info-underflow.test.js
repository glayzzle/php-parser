// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // sapi/fpm/tests/bug78599-path-info-underflow.phpt
  it("FPM: bug78599 - env_path_info underflow - CVE-2019-11043", function () {
    expect(parser.parseCode("<?php\nrequire_once \"tester.inc\";\n$cfg = <<<EOT\n[global]\nerror_log = {{FILE:LOG}}\n[unconfined]\nlisten = {{ADDR}}\npm = dynamic\npm.max_children = 5\npm.start_servers = 1\npm.min_spare_servers = 1\npm.max_spare_servers = 3\nEOT;\n$code = <<<EOT\n<?php\necho \"Test Start\\n\";\nvar_dump(\\$_SERVER[\"PATH_INFO\"]);\necho \"Test End\\n\";\nEOT;\n$tester = new FPM\\Tester($cfg, $code);\n$tester->start();\n$tester->expectLogStartNotices();\n$uri = $tester->makeSourceFile();\n$tester\n    ->request(\n        '',\n        [\n            'SCRIPT_FILENAME' => $uri . \"/\" . str_repeat('A', 35),\n            'PATH_INFO'       => '',\n            'HTTP_HUI'        => str_repeat('PTEST', 1000),\n        ],\n        $uri\n    )\n    ->expectBody(\n        [\n            'Test Start',\n            'string(0) \"\"',\n            'Test End'\n        ]\n    );\n$tester->terminate();\n$tester->close();\n?>\nDone")).toMatchSnapshot();
  });
});
