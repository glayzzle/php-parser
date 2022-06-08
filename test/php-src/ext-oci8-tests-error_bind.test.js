// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/oci8/tests/error_bind.phpt
  it("Test some oci_bind_by_name error conditions", function () {
    expect(parser.parseCode("<?php\nrequire(__DIR__.'/connect.inc');\n$drop = \"drop table bind_test\";\n$statement = oci_parse($c, $drop);\n@oci_execute($statement);\n$create = \"create table bind_test(name varchar(10))\";\n$statement = oci_parse($c, $create);\noci_execute($statement);\necho \"Insert value\\n\";\n$name = 'abc';\n$stmt = oci_parse($c, \"insert into bind_test values (:name)\");\noci_bind_by_name($stmt, \":name\", $name, 10, SQLT_CHR);\nvar_dump(oci_execute($stmt));\necho \"Test 1 - Assign a resource to the bind variable and execute\\n\";\n$name=$c;\nvar_dump(oci_execute($stmt));\necho \"Test 2 - Re-bind a resource\\n\";\noci_bind_by_name($stmt, \":name\", $c);\nvar_dump(oci_execute($stmt));\nvar_dump($c);\n// Use a connection resource instead of a ROWID.\necho \"Test 3 - Resource mismatch !!\\n\";\n$stmt = oci_parse($c, \"update bind_test set name='xyz' returning rowid into :r_id\");\noci_bind_by_name($stmt, \":r_id\", $c);\nvar_dump(oci_execute($stmt));\n// Clean up\n$drop = \"drop table bind_test\";\n$statement = oci_parse($c, $drop);\n@oci_execute($statement);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
