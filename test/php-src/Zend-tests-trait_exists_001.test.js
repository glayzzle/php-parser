// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/trait_exists_001.phpt
  it("Testing trait_exists()", function () {
    expect(parser.parseCode("<?php\ntrait foo {\n}\nvar_dump(trait_exists('foo'));\nvar_dump(trait_exists(1));\n?>")).toMatchSnapshot();
  });
});
