// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_firebird/tests/bug_76452.phpt
  it("Bug ##76452 (Crash while parsing blob data in firebird_fetch_blob)", function () {
    expect(parser.parseCode("<?php\nrequire_once \"payload_server.inc\";\n$address = run_server(__DIR__ . \"/bug_76452.data\");\n// no need to change the credentials; we're running against a falke server\n$dsn = \"firebird:dbname=inet://$address/test\";\n$username = 'SYSDBA';\n$password = 'masterkey';\n$dbh = new PDO($dsn, $username, $password, [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]);\n$query = $dbh->prepare(\"select * from test\");\n$query->execute();\nvar_dump($query->fetch());\n?>")).toMatchSnapshot();
  });
});
