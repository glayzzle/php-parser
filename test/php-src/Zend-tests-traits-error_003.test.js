// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/traits/error_003.phpt
  it("Trying to use an interface as trait", function () {
    expect(parser.parseCode("<?php\ninterface abc {\n}\nclass A {\n    use abc;\n}\n?>")).toMatchSnapshot();
  });
});
