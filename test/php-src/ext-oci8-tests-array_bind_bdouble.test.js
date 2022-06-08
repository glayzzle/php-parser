// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/oci8/tests/array_bind_bdouble.phpt
  it("Unsupported type: oci_bind_array_by_name() and SQLT_BDOUBLE", function () {
    expect(parser.parseCode("<?php\nrequire __DIR__.'/connect.inc';\n$statement = oci_parse($c, \"BEGIN array_bind_bdouble_pkg.iobind(:c1); END;\");\n$array = Array(1.243,2.5658,3.4234,4.2123,5.9999);\noci_bind_array_by_name($statement, \":c1\", $array, 5, 5, SQLT_BDOUBLE);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
