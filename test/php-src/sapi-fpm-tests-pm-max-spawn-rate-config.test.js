// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // sapi/fpm/tests/pm-max-spawn-rate-config.phpt
  it("FPM: set pm.max_spawn_rate", function () {
    expect(parser.parseCode("<?php\nrequire_once \"tester.inc\";\n$cfg = <<<EOT\n[global]\nerror_log = {{FILE:LOG}}\nlog_level = notice\n[unconfined]\nlisten = {{ADDR}}\npm = dynamic\npm.max_children = 5\npm.start_servers = 2\npm.min_spare_servers = 1\npm.max_spare_servers = 3\npm.max_spawn_rate = 64\nEOT;\n$tester = new FPM\\Tester($cfg);\n$tester->start(['-t', '-t']);\n$tester->expectLogConfigOptions(['pm.max_spawn_rate' => 64]);\n$tester->close();\n?>\nDone")).toMatchSnapshot();
  });
});
