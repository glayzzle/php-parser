// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // sapi/fpm/tests/bug68423-multi-pool-all-pms.phpt
  it("FPM: bug68423 - Multiple pools with different PMs (dynamic + ondemand + static)", function () {
    expect(parser.parseCode("<?php\nrequire_once \"tester.inc\";\n$cfg = <<<EOT\n[global]\nerror_log = {{FILE:LOG}}\n[pool_dynamic]\nlisten = {{ADDR[dynamic]}}\nping.path = /ping\nping.response = pong-dynamic\npm = dynamic\npm.max_children = 5\npm.start_servers = 2\npm.min_spare_servers = 1\npm.max_spare_servers = 3\n[pool_ondemand]\nlisten = {{ADDR[ondemand]}}\nping.path = /ping\nping.response = pong-on-demand\npm = ondemand\npm.max_children = 2\npm.process_idle_timeout = 10\n[pool_static]\nlisten = {{ADDR[static]}}\nping.path = /ping\nping.response = pong-static\npm = static\npm.max_children = 2\nEOT;\n$tester = new FPM\\Tester($cfg);\n$tester->start();\n$tester->expectLogStartNotices();\n$tester->ping('{{ADDR[dynamic]}}', 'pong-dynamic');\n$tester->ping('{{ADDR[ondemand]}}', 'pong-on-demand');\n$tester->ping('{{ADDR[static]}}', 'pong-static');\n$tester->terminate();\n$tester->expectLogTerminatingNotices();\n$tester->close();\n?>\nDone")).toMatchSnapshot();
  });
});
