// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/oci8/tests/bug27303_1.phpt
  it("Bug #27303 (OCIBindByName binds numeric PHP values as characters)", function () {
    expect(parser.parseCode("<?php\nrequire(__DIR__.'/connect.inc');\n$stmtarray = array(\n    \"drop sequence myseq\",\n    \"drop table mytab\",\n    \"create sequence myseq\",\n    \"create table mytab (mydata varchar2(20), seqcol number)\"\n);\noci8_test_sql_execute($c, $stmtarray);\ndefine('MYLIMIT', 200);\n$stmt = \"insert into mytab (mydata, seqcol) values ('Some data', myseq.nextval) returning seqcol into :mybv\";\n$stid = oci_parse($c, $stmt);\nif (!$stid) { echo \"Parse error\"; die; }\n$r = oci_bind_by_name($stid, ':MYBV', $mybv);\nif (!$r) { echo \"Bind error\"; die; }\nfor ($i = 1; $i < MYLIMIT; $i++) {\n    $r = oci_execute($stid, OCI_DEFAULT);\n    if (!$r) { echo \"Execute error\"; die; }\n    var_dump($mybv);\n}\noci_commit($c);\n$stmtarray = array(\n    \"drop sequence myseq\",\n    \"drop table mytab\"\n);\noci8_test_sql_execute($c, $stmtarray);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
