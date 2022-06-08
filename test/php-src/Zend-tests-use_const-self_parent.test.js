// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/use_const/self_parent.phpt
  it("Allow self and parent in use const statement", function () {
    expect(parser.parseCode("<?php\nnamespace {\n    use const self as foo;\n    use const parent as bar;\n}\n?>")).toMatchSnapshot();
  });
});
