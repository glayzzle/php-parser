// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/list_empty_error_keyed.phpt
  it("Cannot use empty elements in keyed array destructuring", function () {
    expect(parser.parseCode("<?php\n$array = ['a' => 1, 'b' => 2];\n['a' => $a, , 'b' => $b] = $array;\n?>")).toMatchSnapshot();
  });
});
