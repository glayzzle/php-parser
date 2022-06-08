// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/oci8/tests/bind_unsupported_3.phpt
  it("Bind with various bind types not supported by TimesTen", function () {
    expect(parser.parseCode("<?php\nrequire(__DIR__.'/connect.inc');\n$types = array(\n    \"SQLT_CLOB\" => SQLT_CLOB,\n    \"SQLT_BLOB\" => SQLT_BLOB,\n    \"OCI_B_CLOB\" => OCI_B_CLOB,\n    \"OCI_B_BLOB\" => OCI_B_BLOB,\n);\nforeach ($types as $t => $v) {\n    echo \"Test - $t\\n\";\n    $s = oci_parse($c, \"select * from dual where dummy = :c1\");\n    $c1 = \"Doug\";\n    oci_bind_by_name($s, \":c1\", $c1, -1, $v);\n}\n?>")).toMatchSnapshot();
  });
});
