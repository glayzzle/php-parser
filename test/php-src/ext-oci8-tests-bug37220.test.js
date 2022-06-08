// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/oci8/tests/bug37220.phpt
  it("Bug #37220 (LOB Type mismatch when using windows & oci8.dll)", function () {
    expect(parser.parseCode("<?php\nrequire __DIR__.'/connect.inc';\n// Initialization\n$stmtarray = array(\n    \"create table bug37220_tab( mycolumn xmltype not null)\",\n    \"insert into bug37220_tab values(xmltype('<THETAG myID=\\\"1234\\\"></THETAG>'))\"\n);\noci8_test_sql_execute($c, $stmtarray);\n// Now let's update the row where myId = 1234 and change the tag\n// 'THETAG' to 'MYTAG' (mycolumn is an XMLTYPE datatype and\n// bug37220_tab a normal Oracle table)\n$query = \"UPDATE  bug37220_tab\n          SET     bug37220_tab.mycolumn = updateXML(bug37220_tab.mycolumn,'/THETAG',xmltype.createXML(:data))\n          WHERE   existsNode(bug37220_tab.mycolumn,'/THETAG[@myID=\\\"1234\\\"]') = 1\";\n$stmt = oci_parse ($c, $query);\n$clob = oci_new_descriptor($c, OCI_D_LOB);\noci_bind_by_name($stmt, ':data', $clob, -1, OCI_B_CLOB);\n$clob->writeTemporary(\"<MYTAG/>\", OCI_TEMP_CLOB);\n$success = oci_execute($stmt, OCI_COMMIT_ON_SUCCESS);\noci_free_statement($stmt);\n$clob->close();\n// Query back the change\n$query = \"select * from bug37220_tab\";\n$stmt = oci_parse ($c, $query);\noci_execute($stmt);\nwhile ($row = oci_fetch_array($stmt, OCI_ASSOC+OCI_RETURN_NULLS)) {\n    foreach ($row as $item) {\n        echo trim($item).\"\\n\";\n    }\n    echo \"\\n\";\n}\n// Cleanup\n$stmtarray = array(\n    \"drop table bug37220_tab\"\n);\noci8_test_sql_execute($c, $stmtarray);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
