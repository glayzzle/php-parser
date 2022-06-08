// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/oci8/tests/db_op_1.phpt
  it("oci_set_db_operation: basic test for end-to-end tracing", function () {
    expect(parser.parseCode("<?php\nrequire(__DIR__.'/connect.inc');\n// Run Test\necho \"Test 1\\n\";\n// Test setting the \"DB operation\" used by Oracle DB for end-to-end application tracing\nfunction dq($c, $q)\n{\n    $s = oci_parse($c, $q);\n    oci_execute($s);\n    var_dump(oci_fetch_assoc($s));\n}\noci_set_db_operation($c, \"db_op_1\");\ndq($c, 'select /*+ MONITOR */ * from dual');\ndq($c, 'select dbop_name from v$sql_monitor where dbop_name is not null order by dbop_exec_id desc');\n?>")).toMatchSnapshot();
  });
});
