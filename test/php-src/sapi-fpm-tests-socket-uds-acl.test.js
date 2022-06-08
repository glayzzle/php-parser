// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // sapi/fpm/tests/socket-uds-acl.phpt
  it("FPM: Unix Domain Socket with Posix ACL", function () {
    expect(parser.parseCode("<?php\nrequire_once \"tester.inc\";\n// Select 3 users and 2 groups known by system (avoid root)\n$users = $groups = [];\n$tmp = file('/etc/passwd');\nfor ($i=1 ; $i <= 3 ; $i++) {\n    $tab = explode(':', $tmp[$i]);\n    $users[] = $tab[0];\n}\n$users = implode(',', $users);\n$tmp = file('/etc/group');\nfor ($i=1 ; $i <= 2 ; $i++) {\n    $tab = explode(':', $tmp[$i]);\n    $groups[] = $tab[0];\n}\n$groups = implode(',', $groups);\n$cfg = <<<EOT\n[global]\nerror_log = {{FILE:LOG}}\n[unconfined]\nlisten = {{ADDR:UDS}}\nlisten.acl_users = $users\nlisten.acl_groups = $groups\nlisten.mode = 0600\nping.path = /ping\nping.response = pong\npm = dynamic\npm.max_children = 5\npm.start_servers = 2\npm.min_spare_servers = 1\npm.max_spare_servers = 3\nEOT;\n$tester = new FPM\\Tester($cfg);\n$tester->start();\n$tester->expectLogStartNotices();\n$tester->ping('{{ADDR:UDS}}');\npassthru(\"/usr/bin/getfacl -cp \" . $tester->getListen('{{ADDR:UDS}}'));\n$tester->terminate();\n$tester->expectLogTerminatingNotices();\n$tester->close();\n?>\nDone")).toMatchSnapshot();
  });
});
