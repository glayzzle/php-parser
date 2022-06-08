// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/bug77092.phpt
  it("Bug #77092: array_diff_key() - segmentation fault", function () {
    expect(parser.parseCode("<?php\nfunction test() {\n    $anyArrayOne = ['foo' => 'bar', 'bar' => 'baz'];\n    $anyArrayTwo = ['foo' => null];\n    print_r(array_diff_key($anyArrayOne, $anyArrayTwo));\n}\ntest();\n?>")).toMatchSnapshot();
  });
});
