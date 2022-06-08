// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/oci8/tests/extauth_04.phpt
  it("Test External Authentication errors on Windows", function () {
    expect(parser.parseCode("<?php\n// Run Test\necho \"Test 1\\n\";\n$c = oci_connect('/', '', 'anything', null, OCI_CRED_EXT);\nif (!$c) {\n    $m = oci_error();\n    var_dump($m);\n}\nvar_dump($c);\necho \"Test 2\\n\";\n$c = oci_new_connect('/', '', 'anything', null, OCI_CRED_EXT);\nif (!$c) {\n    $m = oci_error();\n    var_dump($m);\n}\nvar_dump($c);\necho \"Test 3\\n\";\n$c = oci_pconnect('/', '', 'anything', null, OCI_CRED_EXT);\nif (!$c) {\n    $m = oci_error();\n    var_dump($m);\n}\nvar_dump($c);\n?>")).toMatchSnapshot();
  });
});
