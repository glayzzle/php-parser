// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_odbc/tests/bug80783.phpt
  it("Bug #80783 (PDO ODBC truncates BLOB records at every 256th byte)", function () {
    expect(parser.parseCode("<?php\nrequire 'ext/pdo/tests/pdo_test.inc';\n$db = PDOTest::test_factory(dirname(__FILE__) . '/common.phpt');\n$db->exec(\"CREATE TABLE bug80783 (name IMAGE)\");\n$string = str_repeat(\"0123456789\", 50);\n$db->exec(\"INSERT INTO bug80783 VALUES('$string')\");\n$stmt = $db->prepare(\"SELECT name FROM bug80783\");\n$stmt->bindColumn(1, $data, PDO::PARAM_LOB);\n$stmt->execute();\n$stmt->fetch(PDO::FETCH_BOUND);\nvar_dump($data === bin2hex($string));\n?>")).toMatchSnapshot();
  });
});
