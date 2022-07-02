// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/bug24445.phpt
  it("Bug #24445 (get_parent_class() returns the current class when passed an object)", function () {
    expect(parser.parseCode("<?php\nclass Test { }\nvar_dump(get_parent_class('Test'));\n$t = new Test;\nvar_dump(get_parent_class($t));\n?>")).toMatchSnapshot();
  });
});
