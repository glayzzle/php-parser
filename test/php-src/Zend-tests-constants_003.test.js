// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/constants_003.phpt
  it("Using namespace constants and constants of global scope", function () {
    expect(parser.parseCode("<?php\nnamespace foo;\nconst foo = 1;\ndefine('foo', 2);\nvar_dump(foo, namespace\\foo, \\foo\\foo, \\foo, constant('foo'), constant('foo\\foo'));\n?>")).toMatchSnapshot();
  });
});
