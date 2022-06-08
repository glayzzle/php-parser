// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/bug66356.phpt
  it("Bug #66356 (Heap Overflow Vulnerability in imagecrop())", function () {
    expect(parser.parseCode("<?php\n$img = imagecreatetruecolor(10, 10);\n// POC #1\nvar_dump(imagecrop($img, array(\"x\" => \"a\", \"y\" => 0, \"width\" => 10, \"height\" => 10)));\n$arr = array(\"x\" => \"a\", \"y\" => \"12b\", \"width\" => 10, \"height\" => 10);\nvar_dump(imagecrop($img, $arr));\nprint_r($arr);\n// POC #2\nvar_dump(imagecrop($img, array(\"x\" => 0, \"y\" => 0, \"width\" => -1, \"height\" => 10)));\n// POC #3\nvar_dump(imagecrop($img, array(\"x\" => -20, \"y\" => -20, \"width\" => 10, \"height\" => 10)));\n// POC #4\nvar_dump(imagecrop($img, array(\"x\" => 0x7fffff00, \"y\" => 0, \"width\" => 10, \"height\" => 10)));\n// bug 66815\nvar_dump(imagecrop($img, array(\"x\" => 0, \"y\" => 0, \"width\" => 65535, \"height\" => 65535)));\n?>")).toMatchSnapshot();
  });
});
