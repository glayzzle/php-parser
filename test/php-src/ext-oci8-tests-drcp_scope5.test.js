// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/oci8/tests/drcp_scope5.phpt
  it("DRCP: oci_pconnect() with scope end when oci8.old_oci_close_semantics ON", function () {
    expect(parser.parseCode("<?php\nrequire __DIR__.\"/drcp_functions.inc\";\nrequire __DIR__.\"/details.inc\";\n// Similar to drcp_scope3.phpt but does a commit before end of\n// function2, allowing the table to be dropped cleanly at the end.\n// The test opens a connection within function1 and updates a table\n// (without committing).  Another connection is opened from function\n// 2, and the table queried.  When function1 ends, the connection from\n// function1 is not closed, so the updated value will be seen in\n// function2.  Also the table can't be dropped because an uncommitted\n// transaction exists.\n// Create the table\n$c = oci_new_connect($user,$password,$dbase);\n@drcp_drop_table($c);\ndrcp_create_table($c);\necho \"This is with a OCI_PCONNECT\\n\";\nfunction1($user,$password,$dbase);\n// Should return the OLD value\nfunction2($user,$password,$dbase);\n// This is the first scope for the script\nfunction function1($user,$password,$dbase)\n{\n    var_dump($c = oci_pconnect($user,$password,$dbase));\n    drcp_update_table($c);\n}\n// This is the second scope\nfunction function2($user,$password,$dbase)\n{\n    var_dump($c = oci_pconnect($user,$password,$dbase));\n    drcp_select_value($c);\n    oci_commit($c);\n}\ndrcp_drop_table($c);\noci_close($c);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
