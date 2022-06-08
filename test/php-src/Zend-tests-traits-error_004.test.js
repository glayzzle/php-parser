// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/traits/error_004.phpt
  it("Trying to use a class as trait", function () {
    expect(parser.parseCode("<?php\nclass abc {\n}\nclass A {\n    use abc;\n}\n?>")).toMatchSnapshot();
  });
});
