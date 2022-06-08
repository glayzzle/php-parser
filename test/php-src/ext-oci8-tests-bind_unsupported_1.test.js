// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/oci8/tests/bind_unsupported_1.phpt
  it("Bind with various unsupported bind types", function () {
    expect(parser.parseCode("<?php\nrequire(__DIR__.'/connect.inc');\n// These types are defined in oci8.c\n$types = array(\n    \"SQLT_AVC\" => SQLT_AVC,\n    \"SQLT_STR\" => SQLT_STR,\n    \"SQLT_VCS\" => SQLT_VCS,\n    \"SQLT_AVC\" => SQLT_AVC,\n    \"SQLT_STR\" => SQLT_STR,\n    \"SQLT_LVC\" => SQLT_LVC,\n    \"SQLT_FLT\" => SQLT_FLT,\n    \"SQLT_UIN\" => SQLT_UIN,\n    \"SQLT_ODT\" => SQLT_ODT,\n);\nforeach ($types as $t => $v) {\n    echo \"Test - $t\\n\";\n    $s = oci_parse($c, \"select * from dual where dummy = :c1\");\n    $c1 = \"Doug\";\n    oci_bind_by_name($s, \":c1\", $c1, -1, $v);\n}\n?>")).toMatchSnapshot();
  });
});
