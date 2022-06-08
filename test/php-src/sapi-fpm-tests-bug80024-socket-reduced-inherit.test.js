// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // sapi/fpm/tests/bug80024-socket-reduced-inherit.phpt
  it("FPM: bug80024 - Duplication of info about inherited socket after pool removing", function () {
    expect(parser.parseCode("<?php\nrequire_once \"tester.inc\";\n$cfg['main'] = <<<EOT\n[global]\nerror_log = {{FILE:LOG}}\npid = {{FILE:PID}}\ninclude = {{INCLUDE:CONF}}\nEOT;\n$cfg['poolTemplate'] = <<<EOT\n[pool_%index%]\nlisten = {{ADDR:UDS[pool_%index%]}}\npm = ondemand\npm.start_servers = 2\npm.min_spare_servers = 1\npm.max_spare_servers = 3\npm.max_children = 5\nEOT;\n$cfg['count'] = 129;\n$tester = new FPM\\Tester($cfg);\n$tester->start();\n$tester->expectLogStartNotices();\n$cfg['count'] = 128;\n$tester->reload($cfg);\n$tester->expectLogReloadingNotices(129);\n$tester->reload();\n$tester->expectLogReloadingNotices(128);\n$tester->terminate();\n$tester->expectLogTerminatingNotices();\n$tester->close();\n?>\nDone")).toMatchSnapshot();
  });
});
