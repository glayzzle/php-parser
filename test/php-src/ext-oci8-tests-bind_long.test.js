// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/oci8/tests/bind_long.phpt
  it("bind LONG field", function () {
    expect(parser.parseCode("<?php\nrequire(__DIR__.\"/connect.inc\");\n$stmt = oci_parse($c, \"drop table phptestlng\");\n@oci_execute($stmt);\n$stmt = oci_parse($c, \"create table phptestlng( id number(10), filetxt long)\");\noci_execute($stmt);\necho \"Test 1\\n\";\n$stmt = oci_parse ($c, \"insert into phptestlng (id, filetxt) values (:id, :filetxt)\");\n$i=1;\n$filetxt1 = file_get_contents( __DIR__.\"/test.txt\");\n$filetxt = str_replace(\"\\r\", \"\", $filetxt1);\noci_bind_by_name( $stmt, \":id\", $i, -1);\noci_bind_by_name( $stmt, \":filetxt\", $filetxt, -1, SQLT_LNG);\noci_execute($stmt, OCI_DEFAULT);\noci_commit($c);\n$stmt = oci_parse($c, \"SELECT filetxt FROM phptestlng where id = 1\");\noci_execute($stmt);\n$row = oci_fetch_row($stmt);\nvar_dump(md5($row[0]));\nvar_dump(strlen($row[0]));\necho \"Test 2 - test multi chunk fetch\\n\";\n$stmt = oci_parse ($c, \"insert into phptestlng (id, filetxt) values (:id, :filetxt)\");\n$i=2;\n$filetxt = str_repeat($filetxt, 600);\noci_bind_by_name( $stmt, \":id\", $i, -1);\noci_bind_by_name( $stmt, \":filetxt\", $filetxt, -1, SQLT_LNG);\noci_execute($stmt, OCI_DEFAULT);\noci_commit($c);\n$stmt = oci_parse($c, \"SELECT filetxt FROM phptestlng where id = 2\");\noci_execute($stmt);\n$row = oci_fetch_row($stmt);\nvar_dump(md5($row[0]));\nvar_dump(strlen($row[0]));\n$stmt = oci_parse($c, \"drop table phptestlng\");\noci_execute($stmt);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
