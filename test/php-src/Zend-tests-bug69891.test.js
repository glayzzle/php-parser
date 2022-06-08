// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug69891.phpt
  it("Bug #69891: Unexpected array comparison result", function () {
    expect(parser.parseCode("<?php\nvar_dump([1, 2, 3] <=> []);\nvar_dump([] <=> [1, 2, 3]);\nvar_dump([1] <=> [2, 3]);\n?>")).toMatchSnapshot();
  });
});
