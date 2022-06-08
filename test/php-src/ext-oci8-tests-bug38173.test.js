// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/oci8/tests/bug38173.phpt
  it("Bug #38173 (Freeing nested cursors causes OCI8 to segfault)", function () {
    expect(parser.parseCode("<?php\nrequire __DIR__.\"/connect.inc\";\n$create_1 = \"CREATE TABLE t1 (id INTEGER)\";\n$create_2 = \"CREATE TABLE t2 (id INTEGER)\";\n$drop_1 = \"DROP TABLE t1\";\n$drop_2 = \"DROP TABLE t2\";\n$s1 = oci_parse($c, $drop_1);\n$s2 = oci_parse($c, $drop_2);\n@oci_execute($s1);\n@oci_execute($s2);\n$s1 = oci_parse($c, $create_1);\n$s2 = oci_parse($c, $create_2);\noci_execute($s1);\noci_execute($s2);\nfor($i=0; $i < 5; $i++) {\n    $insert = \"INSERT INTO t1 VALUES(\".$i.\")\";\n    $s = oci_parse($c, $insert);\n    oci_execute($s);\n}\nfor($i=0; $i < 5; $i++) {\n    $insert = \"INSERT INTO t2 VALUES(\".$i.\")\";\n    $s = oci_parse($c, $insert);\n    oci_execute($s);\n}\n$query =\"\nSELECT\n  t1.*,\n  CURSOR( SELECT * FROM t2 ) as cursor\nFROM\n  t1\n\";\n$sth = oci_parse($c, $query);\noci_execute($sth);\n// dies on oci_free_statement on 2nd pass through loop\nwhile ( $row = oci_fetch_assoc($sth) ) {\n  print \"Got row!\\n\";\n  var_dump(oci_execute($row['CURSOR']));\n  var_dump(oci_free_statement($row['CURSOR']));\n}\n$s1 = oci_parse($c, $drop_1);\n$s2 = oci_parse($c, $drop_2);\n@oci_execute($s1);\n@oci_execute($s2);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
