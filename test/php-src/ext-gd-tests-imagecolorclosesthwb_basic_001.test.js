// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/imagecolorclosesthwb_basic_001.phpt
  it("Test imagecolorclosesthwb() basic functionality", function () {
    expect(parser.parseCode("<?php\n    // Create the size of image or blank image\n    $image = imagecreate(500, 200);\n    // Set the background color of image\n    $background_color = imagecolorallocate($image, 0, 24, 200);\n    // Set the text color of image\n    $text_color = imagecolorallocate($image, 255, 255, 255);\n    // Function to create image which contains string.\n    imagestring($image, 5, 180, 100,  \"PHP is awesome\", $text_color);\n    imagestring($image, 3, 120, 120,  \"A test for PHP imagecolorclosesthwb function\", $text_color);\n    var_dump(imagecolorclosesthwb($image, 0, 115, 152)); // 0\n    var_dump(imagecolorclosesthwb($image, 0, 24, 200)); // 0\n    var_dump(imagecolorclosesthwb($image, 116, 120, 115)); // 1\n    var_dump(imagecolorclosesthwb($image, 50, 0, 90)); // 0\n    imagedestroy($image);\n?>")).toMatchSnapshot();
  });
});
