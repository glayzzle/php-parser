// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // sapi/fpm/tests/pool-apparmor-basic.phpt
  it("FPM: AppArmor basic test", function () {
    expect(parser.parseCode("<?php\nrequire_once \"tester.inc\";\n$cfg = <<<EOT\n[global]\nerror_log = {{FILE:LOG}}\n[unconfined]\nlisten = {{ADDR:UDS}}\npm = dynamic\npm.max_children = 5\npm.start_servers = 2\npm.min_spare_servers = 1\npm.max_spare_servers = 3\napparmor_hat = a\nEOT;\n$tester = new FPM\\Tester($cfg);\n/* libapparmor has a bug which can cause SIGSEGV till Version 2.8.0-0ubuntu28\n   See https://bugs.launchpad.net/apparmor/+bug/1196880\n   Possible outcomes:\n   - SIGSEGV|failed to query apparmor confinement\n     apparmor not running\n   - failed to change to new confinement\n     something in apparmor went wrong\n   - exited with code 70\n     Change to successful; Hat not existent (Process gets killed by apparmor)\n */\n$tester->runTill(\n    '/(SIGSEGV|failed to query apparmor confinement|' .\n    'failed to change to new confinement|exited with code 70)/'\n);\n?>\nDone")).toMatchSnapshot();
  });
});
