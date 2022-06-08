// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // sapi/fpm/tests/socket-uds-numeric-ugid.phpt
  it("FPM: UNIX socket owner and group settings can be numeric", function () {
    expect(parser.parseCode("<?php\nrequire_once \"tester.inc\";\n$cfg = <<<EOT\n[global]\nerror_log = {{FILE:LOG}}\n[unconfined]\nlisten = {{ADDR:UDS}}\nlisten.owner = 1234\nlisten.group = 1234\nuser = 1234\nping.path = /ping\nping.response = pong\npm = dynamic\npm.max_children = 5\npm.start_servers = 2\npm.min_spare_servers = 1\npm.max_spare_servers = 3\nEOT;\n$tester = new FPM\\Tester($cfg);\n$tester->start();\n$tester->expectLogStartNotices();\n$tester->ping('{{ADDR:UDS}}');\n$st = stat($tester->getListen('{{ADDR:UDS}}'));\nif ($st) {\n  $pw = posix_getpwuid($st['uid']);\n  $gr = posix_getgrgid($st['gid']);\n  $user  = $pw ? $pw['name'] : 'UNKNOWN';\n  $group = $gr ? $gr['name'] : 'UNKNOWN';\n  echo \"{$st['uid']}/{$user},{$st['gid']}/{$group}\\n\";\n} else {\n  echo \"stat failed for \" . $tester->getListen('{{ADDR:UDS}}');\n}\n$tester->terminate();\n$tester->expectLogTerminatingNotices();\n$tester->close();\n?>\nDone")).toMatchSnapshot();
  });
});
