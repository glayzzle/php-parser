// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/oci8/tests/conn_attr_5.phpt
  it("Set and get connection attributes with scope end.", function () {
    expect(parser.parseCode("<?php\n$testuser     = 'testuser_attr_5';  // Used in conn_attr.inc\n$testpassword = 'testuser';\nrequire(__DIR__.\"/conn_attr.inc\");\necho\"**Test - Set and get values for the attributes with scope end ************\\n\";\n// Set the attributes in one scope and verify the values from another scope.\nset_scope();\necho \"Get the Values from a different scope \\n\";\nget_scope();\nfunction set_scope() {\n    $conn1 = get_conn(1);\n    set_attr($conn1,'CLIENT_INFO',50);\n    set_attr($conn1,'CLIENT_IDENTIFIER',50);\n    $conn2 = get_conn(3);\n    set_attr($conn2,'ACTION',50);\n    $conn3 = get_conn(2);\n    set_attr($conn3,'MODULE',50);\n}\nfunction get_scope() {\n    $conn1 = get_conn(1);\n    get_attr($conn1,'CLIENT_INFO');\n    get_attr($conn1,'CLIENT_IDENTIFIER');\n    $conn2 = get_conn(3);\n    get_attr($conn2,'ACTION');\n    $conn3 = get_conn(2);\n    get_attr($conn3,'MODULE');\n}\nclean_up($c);\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
