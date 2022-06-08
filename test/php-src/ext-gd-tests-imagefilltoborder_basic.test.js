// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/imagefilltoborder_basic.phpt
  it("Testing imagefilltoborder() of GD library", function () {
    expect(parser.parseCode("<?php\n// Create a image\n$image = imagecreatetruecolor( 100, 100 );\n// Draw a rectangle\nimagefilledrectangle( $image, 0, 0, 100, 100, imagecolorallocate( $image, 255, 255, 255 ) );\n// Draw an ellipse to fill with a black border\nimageellipse( $image, 50, 50, 50, 50, imagecolorallocate( $image, 0, 0, 0 ) );\n// Fill border\nimagefilltoborder( $image, 50, 50, imagecolorallocate( $image, 0, 0, 0 ), imagecolorallocate( $image, 255, 0, 0 ) );\ninclude_once __DIR__ . '/func.inc';\ntest_image_equals_file(__DIR__ . '/imagefilltoborder_basic.png', $image);\n?>")).toMatchSnapshot();
  });
});
