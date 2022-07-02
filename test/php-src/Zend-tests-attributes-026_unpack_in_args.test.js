// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/attributes/026_unpack_in_args.phpt
  it("Cannot use unpacking in attribute argument list", function () {
    expect(parser.parseCode("<?php\n#[MyAttribute(...[1, 2, 3])]\nclass Foo { }\n?>")).toMatchSnapshot();
  });
});
