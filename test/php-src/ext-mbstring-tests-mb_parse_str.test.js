// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/mb_parse_str.phpt
  it("mb_parse_str()", function () {
    expect(parser.parseCode("<?php\n$queries = array(\n    \"foo=abc&bar=def\",\n    \"%2bfoo=def&-bar=jkl\",\n    \"foo[]=abc&foo[]=def&foo[]=ghi&bar[]=jkl\"\n);\nfunction test($query) {\n    $foo = '';\n    $bar = '';\n    mb_parse_str($query, $array);\n    var_dump($array);\n    var_dump($foo);\n    var_dump($bar);\n}\nforeach ($queries as $query) {\n    test($query);\n}\n?>")).toMatchSnapshot();
  });
});
