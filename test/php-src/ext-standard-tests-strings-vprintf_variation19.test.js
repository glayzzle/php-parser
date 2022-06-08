// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/vprintf_variation19.phpt
  it("Test vprintf() function : usage variations - with whitespaces in format strings", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing vprintf() : with  white spaces in format strings ***\\n\";\n// initializing the format array\n$formats = array(\n  \"% d  %  d  %   d\",\n  \"% f  %  f  %   f\",\n  \"% F  %  F  %   F\",\n  \"% b  %  b  %   b\",\n  \"% c  %  c  %   c\",\n  \"% e  %  e  %   e\",\n  \"% u  %  u  %   u\",\n  \"% o  %  o  %   o\",\n  \"% x  %  x  %   x\",\n  \"% X  %  X  %   X\",\n  \"% E  %  E  %   E\"\n);\n// initializing the args array\n$args_array = array(\n  array(111, 222, 333),\n  array(1.1, .2, -0.6),\n  array(1.12, -1.13, +0.23),\n  array(1, 2, 3),\n  array(65, 66, 67),\n  array(2e1, 2e-1, -2e1),\n  array(-11, +22, 33),\n  array(012, -023, +023),\n  array(0x11, -0x22, +0x33),\n  array(0x11, -0x22, +0x33),\n  array(2e1, 2e-1, -2e1)\n);\n$counter = 1;\nforeach($formats as $format) {\n  echo\"\\n-- Iteration $counter --\\n\";\n  $result = vprintf($format, $args_array[$counter-1]);\n  echo \"\\n\";\n  var_dump($result);\n  $counter++;\n}\n?>")).toMatchSnapshot();
  });
});
