// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/trait_exists_002.phpt
  it("Testing trait_exists() inside a namespace", function () {
    expect(parser.parseCode("<?php\nnamespace foo;\ntrait IFoo { }\ntrait ITest { }\nvar_dump(trait_exists('IFoo'));\nvar_dump(trait_exists('foo\\\\IFoo'));\nvar_dump(trait_exists('FOO\\\\ITEST'));\n?>")).toMatchSnapshot();
  });
});
