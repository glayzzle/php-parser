// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/oci8/tests/pecl_bug8816.phpt
  it("PECL Bug #8816 (issue in php_oci_statement_fetch with more than one piecewise column)", function () {
    expect(parser.parseCode("<?php\nrequire __DIR__.\"/connect.inc\";\n$create_1 = \"CREATE TABLE t1 (id INTEGER, l1 LONG)\";\n$create_2 = \"CREATE TABLE t2 (id INTEGER, l2 LONG)\";\n$drop_1 = \"DROP TABLE t1\";\n$drop_2 = \"DROP TABLE t2\";\n$s1 = oci_parse($c, $drop_1);\n$s2 = oci_parse($c, $drop_2);\n@oci_execute($s1);\n@oci_execute($s2);\n$s1 = oci_parse($c, $create_1);\n$s2 = oci_parse($c, $create_2);\noci_execute($s1);\noci_execute($s2);\n$values = array(\"1234567890111111111\", \"122222222222222\", \"985456745674567654567654567654\", \"123456789\", \"987654321\");\n$i = 0;\nforeach ($values as $val) {\n    $i++;\n    $insert = \"INSERT INTO t1 VALUES($i, \".$val.\")\";\n    $s = oci_parse($c, $insert);\n    oci_execute($s);\n}\nforeach ($values as $val) {\n    $insert = \"INSERT INTO t2 VALUES($i, \".$val.\")\";\n    $s = oci_parse($c, $insert);\n    oci_execute($s);\n    $i--;\n}\n$query =\"\nSELECT\n  t1.l1, t2.l2\nFROM\nt1, t2\nWHERE\nt1.id = t2.id\nORDER BY t1.id ASC\n\";\n$sth = oci_parse($c, $query);\noci_execute($sth);\nwhile ( $row = oci_fetch_assoc($sth) ) {\n    var_dump($row);\n}\n$s1 = oci_parse($c, $drop_1);\n$s2 = oci_parse($c, $drop_2);\n@oci_execute($s1);\n@oci_execute($s2);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
