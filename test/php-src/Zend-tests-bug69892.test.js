// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug69892.phpt
  it("Bug #69892: Different arrays compare identical due to integer key truncation", function () {
    expect(parser.parseCode("<?php\nvar_dump([0 => 0] === [0x100000000 => 0]);\n?>")).toMatchSnapshot();
  });
});
