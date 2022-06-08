// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/oci8/tests/pecl_bug16842.phpt
  it("PECL Bug #16842 (NO_DATA_FOUND exception is a warning)", function () {
    expect(parser.parseCode("<?php\nrequire(__DIR__.'/connect.inc');\n// Run Test\necho \"Test 1\\n\";\necho \"Raises NO_DATA_FOUND\\n\";\n$s = oci_parse($c, 'begin raise NO_DATA_FOUND; end;');\n$e = oci_execute($s);\nvar_dump($e);\nvar_dump(oci_error($s));\necho \"Test 2\\n\";\necho \"Raises ZERO_DIVIDE\\n\";\n$s = oci_parse($c, 'begin raise ZERO_DIVIDE; end;');\n$e = oci_execute($s);\nvar_dump($e);\nvar_dump(oci_error($s));\noci_close($c);\n?>")).toMatchSnapshot();
  });
});
