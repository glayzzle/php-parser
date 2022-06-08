// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/oci8/tests/array_bind_009.phpt
  it("oci_bind_array_by_name() and invalid values 9", function () {
    expect(parser.parseCode("<?php\nrequire __DIR__.'/connect.inc';\nvar_dump(oci_bind_array_by_name($c, \":c1\", $array, 5, 5, SQLT_CHR));\n?>")).toMatchSnapshot();
  });
});
