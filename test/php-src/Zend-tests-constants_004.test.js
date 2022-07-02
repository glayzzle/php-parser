// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/constants_004.phpt
  it("Trying to redeclare constant inside namespace", function () {
    expect(parser.parseCode("<?php\nnamespace foo;\nconst foo = 1;\nconst foo = 2;\n?>")).toMatchSnapshot();
  });
});
