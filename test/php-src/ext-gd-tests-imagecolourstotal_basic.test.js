// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/imagecolourstotal_basic.phpt
  it("Test imagecolorstotal() function : basic functionality", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing imagecolorstotal() : basic functionality ***\\n\";\n// Palette image\n$img = imagecreate( 50, 50 );\nvar_dump( imagecolorstotal( $img ) );\n$bg = imagecolorallocate( $img, 255, 255, 255 );\nvar_dump( imagecolorstotal( $img ));\n$bg = imagecolorallocate( $img, 255, 0, 0 );\n$bg = imagecolorallocate( $img, 0, 0, 255 );\nvar_dump( imagecolorstotal( $img ));\nimagedestroy( $img );\n// Truecolor image\n$img = imagecreatetruecolor( 50, 50 );\nvar_dump( imagecolorstotal( $img ) );\n$bg = imagecolorallocate( $img, 255, 255, 255 );\nvar_dump( imagecolorstotal( $img ) );\nimagedestroy( $img );\n?>")).toMatchSnapshot();
  });
});
