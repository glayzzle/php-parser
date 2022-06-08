// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/intersection_types/bug81268.phpt
  it("Bug #81268 Wrong message when using null as a default value for intersection types", function () {
    expect(parser.parseCode("<?php\nclass Test {\n    public X&Y $y = null;\n}\n?>")).toMatchSnapshot();
  });
});
