// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/oci8/tests/statement_type.phpt
  it("oci_statement_type()", function () {
    expect(parser.parseCode("<?php\nrequire __DIR__.\"/connect.inc\";\n$sqls = Array(\n    \"SELECT * FROM table\",\n    \"DELETE FROM table WHERE id = 1\",\n    \"INSERT INTO table VALUES(1)\",\n    \"UPDATE table SET id = 1\",\n    \"DROP TABLE table\",\n    \"CREATE OR REPLACE PROCEDURE myproc(v1 NUMBER) as BEGIN DBMS_OUTPUT.PUT_LINE(v1); END;\",\n    \"CREATE TABLE table (id NUMBER)\",\n    \"ALTER TABLE table ADD (col1 NUMBER)\",\n    \"BEGIN NULL; END;\",\n    \"DECLARE myn NUMBER BEGIN myn := 1; END;\",\n    \"CALL myproc(1)\",\n    \"WRONG SYNTAX\",\n    \"\"\n);\nforeach ($sqls as $sql) {\n    $s = oci_parse($c, $sql);\n    var_dump(oci_statement_type($s));\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
