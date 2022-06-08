// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_firebird/tests/bug_76448.phpt
  it("Bug #76448 (Stack buffer overflow in firebird_info_cb)", function () {
    expect(parser.parseCode("<?php\nrequire_once \"payload_server.inc\";\n$address = run_server(__DIR__ . \"/bug_76448.data\");\n// no need to change the credentials; we're running against a falke server\n$dsn = \"firebird:dbname=inet://$address/test\";\n$username = 'SYSDBA';\n$password = 'masterkey';\n$dbh = new PDO($dsn, $username, $password, [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]);\nvar_dump($dbh->getAttribute(PDO::ATTR_SERVER_INFO));\n?>")).toMatchSnapshot();
  });
});
