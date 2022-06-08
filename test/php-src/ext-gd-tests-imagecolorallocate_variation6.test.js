// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/imagecolorallocate_variation6.phpt
  it("Test imagecolorallocate() function : usage variations  - passing RED, GREEN, BLUE values more than 255", function () {
    expect(parser.parseCode("<?php\nrequire  __DIR__ . '/func.inc';\necho \"*** Testing imagecolorallocate() : usage variations ***\\n\";\n$values = array(\n      //Decimal integera data\n      \"Decimal 256\" => 256,\n      // octal integer data\n      \"Octal 0400\" => 0400,\n      // hexa-decimal integer data\n      \"Hexa-decimal 0x100\" => 0x100\n);\n// loop through each element of the array for blue\nforeach($values as $key => $value) {\n      echo \"\\n--$key--\\n\";\n      //Need to be created every time to get expected return value\n      $im_palette = imagecreate(200, 200);\n      $im_true_color = imagecreatetruecolor(200, 200);\n      trycatch_dump(\n          fn() => imagecolorallocate($im_palette, $value, 0, 0),\n          fn() => imagecolorallocate($im_true_color, $value, 0, 0),\n          fn() => imagecolorallocate($im_palette, 0, $value, 0),\n          fn() => imagecolorallocate($im_true_color, 0, $value, 0),\n          fn() => imagecolorallocate($im_palette, 0, 0, $value),\n          fn() => imagecolorallocate($im_true_color, 0, 0, $value)\n      );\n};\n?>")).toMatchSnapshot();
  });
});
