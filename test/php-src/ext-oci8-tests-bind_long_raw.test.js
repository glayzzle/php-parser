// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/oci8/tests/bind_long_raw.phpt
  it("bind LONG RAW field", function () {
    expect(parser.parseCode("<?php\nrequire __DIR__.\"/connect.inc\";\n$stmt = oci_parse($c, \"create table phptestlngraw( id number(10), fileimage long raw)\");\noci_execute($stmt);\n$stmt = oci_parse ($c, \"insert into phptestlngraw (id, fileimage) values (:id, :fileimage)\");\n$i=1;\n$fileimage = file_get_contents( __DIR__.\"/test.gif\");\noci_bind_by_name( $stmt, \":id\", $i, -1);\noci_bind_by_name( $stmt, \":fileimage\", $fileimage, -1, SQLT_LBI);\noci_execute($stmt, OCI_DEFAULT);\noci_commit($c);\n$stmt = oci_parse($c, \"SELECT fileimage FROM phptestlngraw\");\noci_execute($stmt);\n$row = oci_fetch_row($stmt);\nvar_dump(md5($row[0]));\nvar_dump(strlen($row[0]));\n$stmt = oci_parse($c, \"drop table phptestlngraw\");\noci_execute($stmt);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
