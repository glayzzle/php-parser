// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/oci8/tests/bug44113.phpt
  it("Bug #44113 (New collection creation can fail with OCI-22303)", function () {
    expect(parser.parseCode("<?php\nrequire(__DIR__.'/connect.inc');\n// Initialization\n$stmtarray = array(\n    \"create or replace type bug44113_list_t as table of number\"\n);\noci8_test_sql_execute($c, $stmtarray);\n// Run Test\n// The test can take some time to complete and can exceed PHP's test\n// timeout limit on slow networks.\nfor ($x = 0; $x < 70000; $x++) {\n    if (!($var = oci_new_collection($c, 'BUG44113_LIST_T'))) {\n        print \"Failed new collection creation on $x\\n\";\n        break;\n    }\n}\nprint \"Completed $x\\n\";\n// Cleanup\n$stmtarray = array(\n    \"drop type bug44113_list_t\"\n);\noci8_test_sql_execute($c, $stmtarray);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
