// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/constants_009.phpt
  it("Accessing constants inside namespace", function () {
    expect(parser.parseCode("<?php\nnamespace foo\\x;\nconst x = 2;\nclass x {\n    const x = 1;\n}\nvar_dump(namespace\\x,\nx::x,\nnamespace\\x::x);\nvar_dump(defined('foo\\x\\x'));\n?>")).toMatchSnapshot();
  });
});
