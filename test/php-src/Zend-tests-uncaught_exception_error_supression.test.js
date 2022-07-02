// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/uncaught_exception_error_supression.phpt
  it("Error suppression should have no impact on uncaught exceptions", function () {
    expect(parser.parseCode("<?php\nfunction abc() {\n    throw new Error('Example Exception');\n}\n@abc();\n?>")).toMatchSnapshot();
  });
});
