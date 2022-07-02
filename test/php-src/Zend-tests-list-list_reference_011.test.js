// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/list/list_reference_011.phpt
  it("\"Reference Unpacking - Compile Error (const)\" list()", function () {
    expect(parser.parseCode("<?php\nconst FOO = 10;\n[&$f] = FOO;\n?>")).toMatchSnapshot();
  });
});
