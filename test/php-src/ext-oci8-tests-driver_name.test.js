// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/oci8/tests/driver_name.phpt
  it("Verify that the Driver Name attribute is set", function () {
    expect(parser.parseCode("<?php\nrequire(__DIR__.\"/connect.inc\");\necho\"**Test 1.1 - Default values for the attribute **************\\n\";\nget_attr($c);\noci_close($c);\necho\"\\n***Test 1.2 - Get the values from different connections **************\\n\";\n// with oci_pconnect()\necho \"Testing with oci_pconnect()\\n\";\n$pc1=oci_pconnect($user,$password,$dbase);\nget_attr($pc1);\noci_close($pc1);\necho \"Testing with oci_new_connect()\\n\";\n$nc1=oci_new_connect($user,$password,$dbase);\nget_attr($nc1);\noci_close($nc1);\necho \"Done\\n\";\nfunction get_attr($conn)\n{\n    $sel_stmt = \"select client_driver\n        from v\\$session_connect_info sci, v\\$session s\n        where sci.client_driver is not null\n          and sci.sid = s.sid\n          and s.audsid = userenv('SESSIONID')\";\n    $s2 = oci_parse($conn,$sel_stmt);\n    oci_execute($s2,OCI_DEFAULT);\n    oci_fetch($s2);\n    echo \"The value of DRIVER_NAME is \".trim(oci_result($s2,1)).\"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
