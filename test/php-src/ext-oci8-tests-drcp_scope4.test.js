// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/oci8/tests/drcp_scope4.phpt
  it("DRCP: oci_pconnect() with scope end when oci8.old_oci_close_semantics OFF", function () {
    expect(parser.parseCode("<?php\nrequire __DIR__.\"/drcp_functions.inc\";\nrequire __DIR__.\"/details.inc\";\n// The default expected behavior of this test is different between PHP\n// 5.2 and PHP 5.3\n//\n// In PHP 5.3, the test opens a connection within function1 and\n// updates a table (without committing).  Another connection is opened\n// from function 2, and the table queried.  When function1 ends, the\n// txn is rolled back and hence the updated value will not be\n// reflected in function2.  Use oci8.old_oci_close_semantics=1 to\n// get old behavior\n// Create the table\n$c = oci_new_connect($user,$password,$dbase);\n@drcp_drop_table($c);\ndrcp_create_table($c);\necho \"This is with a OCI_PCONNECT\\n\";\nfunction1($user,$password,$dbase);\n// Should return the OLD value\nfunction2($user,$password,$dbase);\n// This is the first scope for the script\nfunction function1($user,$password,$dbase)\n{\n    var_dump($c = oci_pconnect($user,$password,$dbase));\n    drcp_update_table($c);\n}\n// This is the second scope\nfunction function2($user,$password,$dbase)\n{\n    var_dump($c = oci_pconnect($user,$password,$dbase));\n    drcp_select_value($c);\n}\ndrcp_drop_table($c);\noci_close($c);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
