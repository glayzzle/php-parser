// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/oci8/tests/bind_raw_2.phpt
  it("bind RAW field with OCI_B_BIN", function () {
    expect(parser.parseCode("<?php\nrequire __DIR__.\"/connect.inc\";\n$stmt = oci_parse($c, \"create table phptestrawtable( id number(10), fileimage raw(1000))\");\noci_execute($stmt);\n$stmt = oci_parse ($c, \"insert into phptestrawtable (id, fileimage) values (:id, :fileimage)\");\n$i=1;\n$fileimage = file_get_contents( __DIR__.\"/test.gif\");\n$fileimage = substr($fileimage, 0, 300);\noci_bind_by_name( $stmt, \":id\", $i, -1);\noci_bind_by_name( $stmt, \":fileimage\", $fileimage, -1, OCI_B_BIN);\noci_execute($stmt, OCI_DEFAULT);\noci_commit($c);\n$stmt = oci_parse($c, \"SELECT fileimage FROM phptestrawtable\");\noci_execute($stmt);\n$row = oci_fetch_row($stmt);\nvar_dump(md5($row[0]));\nvar_dump(strlen($row[0]));\n$stmt = oci_parse($c, \"drop table phptestrawtable\");\noci_execute($stmt);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
