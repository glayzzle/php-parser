// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/enum/constants.phpt
  it("Enum allows constants", function () {
    expect(parser.parseCode("<?php\nenum Foo {\n    const BAR = 'Bar';\n}\necho Foo::BAR . \"\\n\";\n?>")).toMatchSnapshot();
  });
});
