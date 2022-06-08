// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // sapi/fpm/tests/status-listen.phpt
  it("FPM: Status listen test", function () {
    expect(parser.parseCode("<?php\nrequire_once \"tester.inc\";\n$cfg = <<<EOT\n[global]\nerror_log = {{FILE:LOG}}\n[unconfined]\nlisten = {{ADDR}}\npm = static\npm.max_children = 1\npm.status_listen = {{ADDR[status]}}\npm.status_path = /status\nEOT;\n$expectedStatusData = [\n    'pool'                 => 'unconfined',\n    'process manager'      => 'static',\n    'listen queue'         => 0,\n    'max listen queue'     => 0,\n    'idle processes'       => 1,\n    'active processes'     => 0,\n    'total processes'      => 1,\n    'max active processes' => 1,\n    'max children reached' => 0,\n    'slow requests'        => 0,\n];\n$tester = new FPM\\Tester($cfg);\n$tester->start();\n$tester->expectLogStartNotices();\n$tester->request()->expectEmptyBody();\n$tester->status($expectedStatusData, '{{ADDR[status]}}');\n$tester->terminate();\n$tester->expectLogTerminatingNotices();\n$tester->close();\n?>\nDone")).toMatchSnapshot();
  });
});
