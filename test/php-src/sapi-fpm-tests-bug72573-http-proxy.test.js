// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // sapi/fpm/tests/bug72573-http-proxy.phpt
  it("FPM: bug72573 - HTTP_PROXY - CVE-2016-5385", function () {
    expect(parser.parseCode("<?php\nrequire_once \"tester.inc\";\n$cfg = <<<EOT\n[global]\nerror_log = {{FILE:LOG}}\n[unconfined]\nlisten = {{ADDR}}\npm = dynamic\npm.max_children = 5\npm.start_servers = 1\npm.min_spare_servers = 1\npm.max_spare_servers = 3\nEOT;\n$code = <<<EOT\n<?php\necho \"Test Start\\n\";\nvar_dump(\n    @\\$_SERVER[\"HTTP_PROXY\"],\n    \\$_SERVER[\"HTTP_FOO\"],\n    getenv(\"HTTP_PROXY\"),\n    getenv(\"HTTP_FOO\")\n);\necho \"Test End\\n\";\nEOT;\n$tester = new FPM\\Tester($cfg, $code);\n$tester->start();\n$tester->expectLogStartNotices();\n$tester\n    ->request(\n        '',\n        [\n            'HTTP_FOO' => 'BAR',\n            'HTTP_PROXY' => 'BADPROXY',\n        ]\n    )\n    ->expectBody(\n        [\n            'Test Start',\n            'NULL',\n            'string(3) \"BAR\"',\n            'bool(false)',\n            'string(3) \"BAR\"',\n            'Test End'\n        ]\n    );\n$tester->terminate();\n$tester->close();\n?>\nDone")).toMatchSnapshot();
  });
});
