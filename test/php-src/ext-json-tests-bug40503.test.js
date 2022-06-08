// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/json/tests/bug40503.phpt
  it("Bug #40503 (json_encode() value corruption on 32bit systems with overflown values)", function () {
    expect(parser.parseCode("<?php\nfunction json_test_show_eq($x, $y) {\n    echo \"$x \". ( $x == $y ? \"==\" : \"!=\") .\" $y\\n\";\n}\n$value = 0x7FFFFFFF; #2147483647;\njson_test_show_eq(\"$value\", json_encode($value));\n$value++;\njson_test_show_eq(\"$value\", json_encode($value));\n?>")).toMatchSnapshot();
  });
});
