// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/imagecolorstotal_basic.phpt
  it("Test imagecolorstotal() function : basic functionality", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing imagecolorstotal() : basic functionality ***\\n\";\n// Get an image\n$gif = __DIR__.\"/php.gif\";\n$im = imagecreatefromgif($gif);\necho 'Total colors in image: ' . imagecolorstotal($im);\n// Free image\nimagedestroy($im);\n?>")).toMatchSnapshot();
  });
});
