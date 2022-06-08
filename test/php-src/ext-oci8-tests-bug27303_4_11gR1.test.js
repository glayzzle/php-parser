// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/oci8/tests/bug27303_4_11gR1.phpt
  it("Bug #27303 (OCIBindByName binds numeric PHP values as characters)", function () {
    expect(parser.parseCode("<?php\nrequire __DIR__.'/connect.inc';\n$create_st = array();\n$create_st[] = \"drop sequence myseq\";\n$create_st[] = \"drop table mytab\";\n$create_st[] = \"create sequence myseq\";\n$create_st[] = \"create table mytab (mydata varchar2(20), seqcol number)\";\noci8_test_sql_execute($c, $create_st);\ndefine('MYLIMIT', 200);\n$stmt = \"insert into mytab (mydata, seqcol) values ('Some data', myseq.nextval) returning seqcol into :mybv\";\n$stid = oci_parse($c, $stmt);\nif (!$stid) { echo \"Parse error\"; die; }\n$r = oci_bind_by_name($stid, ':MYBV', $mybv, 0 );\nif (!$r) { echo \"Bind error\"; die; }\nfor ($i = 1; $i < MYLIMIT; $i++) {\n    $r = oci_execute($stid, OCI_DEFAULT);\n    if (!$r) { echo \"Execute error\"; die; }\n    var_dump($mybv);\n}\noci_commit($c);\n$drop_st = array();\n$drop_st[] = \"drop sequence myseq\";\n$drop_st[] = \"drop table mytab\";\noci8_test_sql_execute($c, $drop_st);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
