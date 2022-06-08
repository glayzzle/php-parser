// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/constants_visibility_008.phpt
  it("Defined on private constant should not raise exception", function () {
    expect(parser.parseCode("<?php\nclass Foo\n{\n    private const BAR = 1;\n}\necho (int)defined('Foo::BAR');\n?>")).toMatchSnapshot();
  });
});
