// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/anon/001.phpt
  it("declare bare anonymous class", function () {
    expect(parser.parseCode("<?php\nvar_dump(new class{});\n?>")).toMatchSnapshot();
  });
});
