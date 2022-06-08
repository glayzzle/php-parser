// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/mb_parse_str02.phpt
  it("mb_parse_str() test 2", function () {
    expect(parser.parseCode("<?php\n$queries = array(\n    \"foo=abc#bar=def&fubar=ghi\",\n    \"%2bfoo=def&-bar=jkl#+fubar\",\n    \"  foo[]=abc&foo[]=def#foo[]=ghi#bar[]=#foo[]&fubar[]==\"\n);\nfunction test($query) {\n    $foo = '';\n    $bar = '';\n    $fubar = '';\n    mb_parse_str($query, $array);\n    var_dump($array);\n    var_dump($foo);\n    var_dump($bar);\n    var_dump($fubar);\n}\nforeach ($queries as $query) {\n    test($query);\n}\n?>")).toMatchSnapshot();
  });
});
