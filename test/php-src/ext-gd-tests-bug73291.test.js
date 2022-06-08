// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/bug73291.phpt
  it("Bug #73291 (imagecropauto() $threshold differs from external libgd)", function () {
    expect(parser.parseCode("<?php\n$src = imagecreatetruecolor(255, 255);\n$white = imagecolorallocate($src, 255, 255, 255);\nimagefilledrectangle($src, 0, 0, 254, 254, $white);\nfor ($i = 254; $i > 0; $i--) {\n    $color = imagecolorallocate($src, $i, $i, $i);\n    imagefilledellipse($src, 127, 127, $i, $i, $color);\n}\nforeach ([0.1, 0.5, 1.0, 10.0] as $threshold) {\n    $dst = imagecropauto($src, IMG_CROP_THRESHOLD, $threshold, $white);\n    if ($dst !== false) {\n        printf(\"size: %d*%d\\n\", imagesx($dst), imagesy($dst));\n    } else {\n        echo \"cropped to zero size\\n\";\n    }\n}\n?>")).toMatchSnapshot();
  });
});
