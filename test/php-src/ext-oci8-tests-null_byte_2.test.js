// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/oci8/tests/null_byte_2.phpt
  it("Null bytes in SQL statements", function () {
    expect(parser.parseCode("<?php\nrequire(__DIR__.'/connect.inc');\n// Run Test\necho \"Test 1: Valid use of a null byte\\n\";\n$s = oci_parse($c, \"select * \\0from dual\");\noci_execute($s);\noci_fetch_all($s, $res);\nvar_dump($res);\necho \"Test 3: Using a null byte in a bind variable name\\n\";\n$s = oci_parse($c, \"select * from dual where :bv = 1\");\n$bv = 1;\noci_bind_by_name($s, \":bv\\0:bv\", $bv);\noci_execute($s);\n?>")).toMatchSnapshot();
  });
});
