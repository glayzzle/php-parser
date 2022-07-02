// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/return_types/011.phpt
  it("Function returned callable, expected callable", function () {
    expect(parser.parseCode("<?php\nfunction foo() : callable {\n    return function() {};\n}\nvar_dump(foo());\n?>")).toMatchSnapshot();
  });
});
