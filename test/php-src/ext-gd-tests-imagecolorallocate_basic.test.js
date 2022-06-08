// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/imagecolorallocate_basic.phpt
  it("Test imagecolorallocate() function : basic functionality", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing imagecolorallocate() : basic functionality ***\\n\";\n$im = imagecreatetruecolor(200, 200);\n// Calling imagecolorallocate() with all possible arguments\nvar_dump( imagecolorallocate($im, 255, 0, 0) );\nvar_dump( imagecolorallocate($im, 0, 255, 0) );\nvar_dump( imagecolorallocate($im, 0, 0, 255) );\nvar_dump( imagecolorallocate($im, 255, 255, 255) );\n?>")).toMatchSnapshot();
  });
});
