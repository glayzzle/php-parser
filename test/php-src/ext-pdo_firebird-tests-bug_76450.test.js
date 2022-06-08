// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_firebird/tests/bug_76450.phpt
  it("Bug #76450 (SIGSEGV in firebird_stmt_execute)", function () {
    expect(parser.parseCode("<?php\nrequire_once \"payload_server.inc\";\n$address = run_server(__DIR__ . \"/bug_76450.data\");\n// no need to change the credentials; we're running against a fake server\n$dsn = \"firebird:dbname=inet://$address/test\";\n$username = 'SYSDBA';\n$password = 'masterkey';\n$dbh = new PDO($dsn, $username, $password, [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]);\n$sql = \"EXECUTE PROCEDURE test_proc 123\";\n$query = $dbh->prepare($sql);\ntry {\n    $query->execute();\n} catch (Exception $ex) {\n    echo \"{$ex->getMessage()}\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
