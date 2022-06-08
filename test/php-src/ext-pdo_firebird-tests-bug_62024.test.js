// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_firebird/tests/bug_62024.phpt
  it("Bug #62024 Cannot insert second row with null using parametrized query (Firebird PDO)", function () {
    expect(parser.parseCode("<?php\nrequire(\"testdb.inc\");\n$dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING);\n@$dbh->exec('DROP TABLE test_insert');\n$dbh->exec(\"CREATE TABLE test_insert (ID INTEGER NOT NULL, TEXT VARCHAR(10))\");\n$dbh->commit();\n//start actual test\n$sql = \"insert into test_insert (id, text) values (?, ?)\";\n$sttmt = $dbh->prepare($sql);\n$args_ok = array(1, \"test1\");\n$args_err = array(2, null);\n$res = $sttmt->execute($args_ok);\nvar_dump($res);\n$res = $sttmt->execute($args_err);\nvar_dump($res);\n$dbh->commit();\n//teardown test data\n$sttmt = $dbh->prepare('DELETE FROM test_insert');\n$sttmt->execute();\n$dbh->commit();\n$dbh->exec('DROP TABLE test_insert');\nunset($sttmt);\nunset($dbh);\n?>")).toMatchSnapshot();
  });
});
