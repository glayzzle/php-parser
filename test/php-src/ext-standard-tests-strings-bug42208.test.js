// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/bug42208.phpt
  it("Bug #42208 (substr_replace() crashes when the same array is passed more than once)", function () {
    expect(parser.parseCode("<?php\n$a = array(1, 2);\n$c = $a;\nvar_dump(substr_replace($a, 1, 1, $c));\n?>")).toMatchSnapshot();
  });
});
