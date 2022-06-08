// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/oci8/tests/bind_unsupported_2.phpt
  it("Bind with various unsupported 10g+ bind types", function () {
    expect(parser.parseCode("<?php\nrequire(__DIR__.'/connect.inc');\n$types = array(\n    \"SQLT_BDOUBLE\" => SQLT_BDOUBLE,\n    \"SQLT_BFLOAT\" => SQLT_BFLOAT,\n);\nforeach ($types as $t => $v) {\n    echo \"Test - $t\\n\";\n    $s = oci_parse($c, \"select * from dual where dummy = :c1\");\n    $c1 = \"Doug\";\n    oci_bind_by_name($s, \":c1\", $c1, -1, $v);\n}\n?>")).toMatchSnapshot();
  });
});
