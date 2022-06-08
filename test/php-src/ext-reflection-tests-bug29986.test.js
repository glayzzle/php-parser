// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/bug29986.phpt
  it("Reflection Bug #29986 (Class constants won't work with predefined constants when using ReflectionClass)", function () {
    expect(parser.parseCode("<?php\nclass just_constants\n{\n    const BOOLEAN_CONSTANT = true;\n    const NULL_CONSTANT = null;\n    const STRING_CONSTANT = 'This is a string';\n    const INTEGER_CONSTANT = 1000;\n    const FLOAT_CONSTANT = 3.14159265;\n}\necho new ReflectionClass('just_constants');\n?>")).toMatchSnapshot();
  });
});
