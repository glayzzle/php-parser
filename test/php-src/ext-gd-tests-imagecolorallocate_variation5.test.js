// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/imagecolorallocate_variation5.phpt
  it("Test imagecolorallocate() function : usage variations  - passing octal and hexa-decimal values", function () {
    expect(parser.parseCode("<?php\nrequire __DIR__ . '/func.inc';\necho \"*** Testing imagecolorallocate() : usage variations ***\\n\";\n$im = imagecreatetruecolor(200, 200);\n$red = 10;\n$green = 10;\n$blue = 10;\n$values = array(\n      // octal integer data\n      \"Octal 000\" => 000,\n      \"Octal 012\" => 012,\n      \"Octal -012\" => -012,\n      \"Octal 0377\" => 0377,\n      // hexa-decimal integer data\n      \"Hexa-decimal 0x0\" => 0x0,\n      \"Hexa-decimal 0xA\" => 0xA,\n      \"Hexa-decimal -0xA\" => -0xA,\n      \"Hexa-decimal 0xFF\" => 0xFF,\n);\n// loop through each element of the array for blue\nforeach($values as $key => $value) {\n    echo \"\\n--$key--\\n\";\n    trycatch_dump(\n        fn() => imagecolorallocate($im, $value, $green, $blue),\n        fn() => imagecolorallocate($im, $red, $value, $blue),\n        fn() => imagecolorallocate($im, $red, $green, $value)\n    );\n};\n?>")).toMatchSnapshot();
  });
});
