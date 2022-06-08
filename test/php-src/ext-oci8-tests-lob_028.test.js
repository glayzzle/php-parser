// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/oci8/tests/lob_028.phpt
  it("Test descriptor types for oci_new_descriptor()", function () {
    expect(parser.parseCode("<?php\nrequire __DIR__.'/connect.inc';\n// Successful statements\n$d = oci_new_descriptor($c, OCI_D_FILE);\nvar_dump($d);\n$d = oci_new_descriptor($c, OCI_DTYPE_FILE);\nvar_dump($d);\n$d = oci_new_descriptor($c, OCI_D_LOB);\nvar_dump($d);\n$d = oci_new_descriptor($c, OCI_DTYPE_LOB);\nvar_dump($d);\n$d = oci_new_descriptor($c, OCI_D_ROWID);\nvar_dump($d);\n$d = oci_new_descriptor($c, OCI_DTYPE_ROWID);\nvar_dump($d);\n// Unsuccessful statements\n$d = oci_new_descriptor($c, OCI_B_CLOB);\nvar_dump($d);\n$d = oci_new_descriptor($c, OCI_B_CLOB);\nvar_dump($d);\n$d = oci_new_descriptor($c, OCI_DEFAULT);\nvar_dump($d);\n$d = oci_new_descriptor($c, 1);\nvar_dump($d);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
