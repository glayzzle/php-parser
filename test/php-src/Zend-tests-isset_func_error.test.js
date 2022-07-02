// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/isset_func_error.phpt
  it("Error message for isset(func())", function () {
    expect(parser.parseCode("<?php\nisset(abc());\n?>")).toMatchSnapshot();
  });
});
