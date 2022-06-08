// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/oci8/tests/bind_rowid.phpt
  it("Test ROWID bind", function () {
    expect(parser.parseCode("<?php\nrequire(__DIR__.\"/connect.inc\");\nfunction do_query($c)\n{\n    $s = oci_parse($c, 'select address from rid_tab order by id');\n    $id = 1;\n    oci_execute($s, OCI_DEFAULT);\n    while ($row = oci_fetch_array($s, OCI_ASSOC+OCI_RETURN_NULLS)) {\n        var_dump($row);\n    }\n}\n$stmtarray = array(\n    \"drop table rid_tab\",\n    \"create table rid_tab (id number, address varchar2(40))\",\n    \"insert into rid_tab (id, address) values (1, 'original text #1')\",\n    \"insert into rid_tab (id, address) values (2, 'original text #2')\"\n);\noci8_test_sql_execute($c, $stmtarray);\necho \"Initial Data\\n\";\ndo_query($c);\n$s = oci_parse($c, 'select rowid, address from rid_tab where id = :l_bv for update');\n$id = 1;\noci_bind_by_name($s, ':l_bv', $id);\noci_execute($s, OCI_DEFAULT);\n$row = oci_fetch_array($s, OCI_ASSOC+OCI_RETURN_NULLS);\n$rid = $row['ROWID'];\n$addr = $row['ADDRESS'];\n$addr = 'Some new text';\n// Save changes\n$s = oci_parse($c,'update rid_tab set address = :a_bv where rowid = :r_bv');\noci_bind_by_name($s, ':r_bv', $rid, -1, OCI_B_ROWID);\noci_bind_by_name($s, ':a_bv', $addr);\noci_execute($s);\necho \"Verify Change\\n\";\ndo_query($c);\n// Cleanup\n$stmtarray = array(\n    \"drop table rid_tab\"\n);\noci8_test_sql_execute($c, $stmtarray);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
