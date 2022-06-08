// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/use_function/self_parent.phpt
  it("Allow self and parent in use function statement", function () {
    expect(parser.parseCode("<?php\nnamespace {\n    use function self as foo;\n    use function parent as bar;\n}\n?>")).toMatchSnapshot();
  });
});
