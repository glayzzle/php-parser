// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_firebird/tests/payload_test.phpt
  it("FB payload server satisfies connection attempt", function () {
    expect(parser.parseCode("<?php\nrequire_once \"payload_server.inc\";\n$address = run_server(__DIR__ . \"/payload_test.data\");\n// no need to change the credentials; we're running against a fake server\n$dsn = \"firebird:dbname=inet://$address/test\";\n$username = 'SYSDBA';\n$password = 'masterkey';\nnew PDO($dsn, $username, $password, [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]);\n?>")).toMatchSnapshot();
  });
});
