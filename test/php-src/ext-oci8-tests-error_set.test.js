// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/oci8/tests/error_set.phpt
  it("Check oci_set_{action,client_identifier,module_name,client_info} error handling", function () {
    expect(parser.parseCode("<?php\nrequire(__DIR__.'/connect.inc');\nerror_reporting(E_ALL);\nini_set('display_errors', 'Off');\necho \"Test 1\\n\";\n// Generates \"ORA-24960: the attribute OCI_ATTR_* is greater than the maximum allowable length of 64\"\n$s = \"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\";\n$r = oci_set_action($c, $s);\nvar_dump($r);\n$m = oci_error($c);\necho $m['code'] , \"\\n\";\n$r = oci_set_client_identifier($c, $s);\nvar_dump($r);\n$m = oci_error($c);\necho $m['code'] , \"\\n\";\n$r = oci_set_module_name($c, $s);\nvar_dump($r);\n$m = oci_error($c);\necho $m['code'] , \"\\n\";\n$r = oci_set_client_info($c, $s);\nvar_dump($r);\n$m = oci_error($c);\necho $m['code'] , \"\\n\";\necho \"\\nTest 2\\n\";\n$s = \"x\";\n$r = oci_set_action($c, $s);\nvar_dump($r);\n$r = oci_set_client_identifier($c, $s);\nvar_dump($r);\n$r = oci_set_module_name($c, $s);\nvar_dump($r);\n$r = oci_set_client_info($c, $s);\nvar_dump($r);\n?>")).toMatchSnapshot();
  });
});
