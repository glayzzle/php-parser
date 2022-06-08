// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/bug24399.phpt
  it("Bug #24399 (is_subclass_of() crashes when parent class doesn't exist)", function () {
    expect(parser.parseCode("<?php\nclass dooh {\n    public $blah;\n}\n$d = new dooh;\nvar_dump(is_subclass_of($d, 'dooh'));\n?>")).toMatchSnapshot();
  });
});
