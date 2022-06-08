// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/oci8/tests/db_op_2.phpt
  it("oci_set_db_operation: test DBOP for end-to-end tracing", function () {
    expect(parser.parseCode("<?php\nrequire(__DIR__.'/connect.inc');\nfunction dq($c, $q)\n{\n    $s = oci_parse($c, $q);\n    oci_execute($s);\n    var_dump(oci_fetch_assoc($s));\n}\necho \"Test 1\\n\";\noci_set_db_operation($c, \"db_op_2_a\");\ndq($c, 'select /*+ MONITOR */ * from dual');\noci_set_db_operation($c, \"db_op_2_b\");\ndq($c, 'select /*+ MONITOR */ * from dual');\ndq($c, 'select dbop_name from v$sql_monitor where dbop_name like \\'db_op_2%\\' order by dbop_exec_id desc');\necho \"Test 2\\n\";\noci_set_db_operation($c, \"\");\ndq($c, 'select /*+ MONITOR */ \\'dboptest\\' from dual');\ndq($c, 'select sql_text, dbop_name from v$sql_monitor where sql_text like \\'%dboptest%\\' order by dbop_exec_id desc');\n?>")).toMatchSnapshot();
  });
});
