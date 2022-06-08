// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/oci8/tests/bug36096.phpt
  it("Bug #36096 (oci_result() returns garbage after oci_fetch() failed)", function () {
    expect(parser.parseCode("<?php\nrequire __DIR__.\"/connect.inc\";\n$sql = \"SELECT 'ABC' FROM DUAL WHERE 1<>1\";\n$stmt = oci_parse($c, $sql);\nif(oci_execute($stmt, OCI_COMMIT_ON_SUCCESS)){\n    var_dump(oci_fetch($stmt));\n    var_dump(oci_result($stmt, 1));\n    var_dump(oci_field_name($stmt, 1));\n    var_dump(oci_field_type($stmt, 1));\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
