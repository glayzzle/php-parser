// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/oci8/tests/null_byte_3.phpt
  it("Null bytes in SQL statements", function () {
    expect(parser.parseCode("<?php\nrequire(__DIR__.'/connect.inc');\n// Run Test\necho \"Test 1: Invalid use of a null byte\\n\";\n$s = oci_parse($c, \"select * from du\\0al\");\noci_execute($s);\necho \"Test 2: Using a null byte in a bind variable value causing WHERE clause to fail\\n\";\n$s = oci_parse($c, \"select * from dual where :bv = 'abc'\");\n$bv = 'abc\\0abc';\noci_bind_by_name($s, \":bv\", $bv);\noci_execute($s);\noci_fetch_all($s, $res);\nvar_dump($res);\n?>")).toMatchSnapshot();
  });
});
