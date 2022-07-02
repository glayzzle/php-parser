// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/traits/error_002.phpt
  it("Trying to use an undefined trait", function () {
    expect(parser.parseCode("<?php\nclass A {\n    use abc;\n}\n?>")).toMatchSnapshot();
  });
});
