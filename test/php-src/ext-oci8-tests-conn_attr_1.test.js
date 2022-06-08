// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/oci8/tests/conn_attr_1.phpt
  it("Set and get of connection attributes with all types of connections.", function () {
    expect(parser.parseCode("<?php\n$testuser     = 'testuser_attr_1';  // Used in conn_attr.inc\n$testpassword = 'testuser';\nrequire(__DIR__.\"/conn_attr.inc\");\n$attr_array = array('MODULE','ACTION','CLIENT_INFO','CLIENT_IDENTIFIER');\necho\"**Test 1.1 - Default values for the attributes **************\\n\";\n$c = get_conn(1);\nforeach($attr_array as $attr) {\n        get_attr($c,$attr);\n}\necho\"**Test 1.2 - Set and get values for the attributes **************\\n\";\n// With oci_connect, oci_pconnect, oci_new_connect\n$conn1 = get_conn(1); //oci_connect()\nforeach($attr_array as $attr) {\n    set_attr($conn1,$attr,1);\n    get_attr($conn1,$attr);\n}\n$conn2 = get_conn(2); //oci_pconnect()\nforeach($attr_array as $attr) {\n    set_attr($conn2,$attr,2);\n    get_attr($conn2,$attr);\n}\n$conn3 = get_conn(3); //oci_new_connect()\nforeach($attr_array as $attr) {\n    set_attr($conn3,$attr,3);\n    get_attr($conn3,$attr);\n}\n// clean up\noci_close($conn1);\noci_close($conn2);\noci_close($conn3);\nclean_up($c);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
