// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/imagecopyresampled_basic.phpt
  it("imagecopyresampled()", function () {
    expect(parser.parseCode("<?php\necho \"Simple test of imagecopyresampled() function\\n\";\n$dest_lge = dirname(realpath(__FILE__)) . '/imagelarge.png';\n$dest_sml = dirname(realpath(__FILE__)) . '/imagesmall.png';\n// create a blank image\n$image_lge = imagecreatetruecolor(400, 300);\n// set the background color to black\n$bg = imagecolorallocate($image_lge, 0, 0, 0);\n// fill polygon with blue\n$col_ellipse = imagecolorallocate($image_lge, 0, 255, 0);\n// draw the eclipse\nimagefilledellipse($image_lge, 200, 150, 300, 200, $col_ellipse);\n// output the picture to a file\nimagepng($image_lge, $dest_lge);\n// Get new dimensions\n$percent = 0.5; // new image 50% of original\nlist($width, $height) = getimagesize($dest_lge);\necho \"Size of original: width=\". $width . \" height=\" . $height . \"\\n\";\n$new_width = $width * $percent;\n$new_height = $height * $percent;\n// Resample\n$image_sml = imagecreatetruecolor($new_width, $new_height);\nimagecopyresampled($image_sml, $image_lge, 0, 0, 0, 0, $new_width, $new_height, $width, $height);\nimagepng($image_sml, $dest_sml);\nlist($width, $height) = getimagesize($dest_sml);\necho \"Size of copy: width=\". $width . \" height=\" . $height . \"\\n\";\nimagedestroy($image_lge);\nimagedestroy($image_sml);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
