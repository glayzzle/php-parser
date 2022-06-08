// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/sprintf_variation53.phpt
  it("Test sprintf() function : usage variations - with whitespaces in format strings", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing sprintf() : with  white spaces in format strings ***\\n\";\n// initializing the format array\n$formats = array(\n  \"% d\", \"%  d\", \"%   d\",\n  \"% f\", \"%  f\", \"%   f\",\n  \"% F\", \"%  F\", \"%   F\",\n  \"% b\", \"%  b\", \"%   b\",\n  \"% c\", \"%  c\", \"%   c\",\n  \"% e\", \"%  e\", \"%   e\",\n  \"% u\", \"%  u\", \"%   u\",\n  \"% o\", \"%  o\", \"%   o\",\n  \"% x\", \"%  x\", \"%   x\",\n  \"% X\", \"%  X\", \"%   X\",\n  \"% E\", \"%  E\", \"%   E\"\n);\n// initializing the args array\nforeach($formats as $format) {\n  var_dump( sprintf($format, 1234) );\n}\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
