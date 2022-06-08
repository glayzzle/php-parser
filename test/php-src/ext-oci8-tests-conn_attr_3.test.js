// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/oci8/tests/conn_attr_3.phpt
  it("Set and get of connection attributes with oci_close().", function () {
    expect(parser.parseCode("<?php\n$testuser     = 'testuser_attr_3';  // Used in conn_attr.inc\n$testpassword = 'testuser';\nrequire(__DIR__.\"/conn_attr.inc\");\necho\"**Test Set and get values for  the attributes with oci_close() ************\\n\";\n// With oci_connect ,oci_pconnect ,oci_new_connect\nvar_dump($conn1 = get_conn(1)); //oci_connect()\nset_attr($conn1,'ACTION',1);\nget_attr($conn1,'ACTION');\noci_close($conn1);\n// Open another connect and verify the value.\nvar_dump($conn1 = get_conn(1)); //oci_connect()\nget_attr($conn1,'ACTION');\noci_close($conn1);\nvar_dump($pconn1 = get_conn(2)); //oci_pconnect()\nset_attr($pconn1,'MODULE',2);\nget_attr($pconn1,'MODULE');\noci_close($pconn1);\n// Open another connect and verify the value.\nvar_dump($pconn1 = get_conn(2)); //oci_pconnect()\nget_attr($pconn1,'MODULE');\noci_close($pconn1);\nvar_dump($nconn1 = get_conn(3)); //oci_new_connect()\nset_attr($nconn1,'CLIENT_INFO',3);\nset_attr($nconn1,'CLIENT_IDENTIFIER',3);\nget_attr($nconn1,'CLIENT_INFO');\nget_attr($nconn1,'CLIENT_IDENTIFIER');\noci_close($nconn1);\n// Open another connect and verify the value.\nvar_dump($nconn1 = get_conn(3)); //oci_new_connect()\nget_attr($nconn1,'CLIENT_INFO');\nget_attr($nconn1,'CLIENT_IDENTIFIER');\noci_close($nconn1);\nclean_up($c);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
