// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/oci8/tests/bug71422.phpt
  it("Bug #71422 (Fix ORA-01438: value larger than specified precision allowed for this column)", function () {
    expect(parser.parseCode("<?php\nrequire(__DIR__.'/connect.inc');\n$stmtarray = array(\n    \"DROP TABLE BUG71422_TEST\",\n    \"CREATE TABLE BUG71422_TEST (TEST_ID NUMBER(*,0) NOT NULL, LABEL VARCHAR2(50 CHAR), CONSTRAINT BUG71422_TEST_PK PRIMARY KEY (TEST_ID))\",\n    \"INSERT INTO BUG71422_TEST (TEST_ID, LABEL) VALUES (1, 'Foo')\"\n);\noci8_test_sql_execute($c, $stmtarray);\n$stmt = oci_parse($c, 'SELECT LABEL AS RAW_QUERY FROM BUG71422_TEST WHERE TEST_ID=1');\noci_execute($stmt);\nwhile ($row = oci_fetch_array($stmt, OCI_ASSOC+OCI_RETURN_NULLS)) {\n    var_dump($row);\n}\n$stmt = oci_parse($c, 'SELECT LABEL AS NUMERIC_BIND_PARAMETER FROM BUG71422_TEST WHERE TEST_ID=:test_id');\n$value = 1;\noci_bind_by_name($stmt, ':test_id', $value, -1, SQLT_INT);\noci_execute($stmt);\nwhile ($row = oci_fetch_array($stmt, OCI_ASSOC+OCI_RETURN_NULLS)) {\n    var_dump($row);\n}\n$stmt = oci_parse($c, 'SELECT LABEL AS STRING_BIND_PARAMETER FROM BUG71422_TEST WHERE TEST_ID=:test_id');\n$value = 1;\noci_bind_by_name($stmt, ':test_id', $value, -1, SQLT_CHR);\noci_execute($stmt);\nwhile ($row = oci_fetch_array($stmt, OCI_ASSOC+OCI_RETURN_NULLS)) {\n    var_dump($row);\n}\n// Cleanup\n$stmtarray = array(\n    \"DROP TABLE BUG71422_TEST\"\n);\noci8_test_sql_execute($c, $stmtarray);\n?>")).toMatchSnapshot();
  });
});
