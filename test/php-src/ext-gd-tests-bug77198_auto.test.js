// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/bug77198_auto.phpt
  it("Bug #77198 (auto cropping has insufficient precision)", function () {
    expect(parser.parseCode("<?php\nfunction createWhiteImageWithBlackPixelAt($x, $y)\n{\n    $im = imagecreatetruecolor(8, 8);\n    imagefilledrectangle($im, 0, 0, 7, 7, 0xffffff);\n    imagesetpixel($im, $x, $y, 0x000000);\n    return $im;\n}\nfor ($y = 0; $y < 8; $y++) {\n    for ($x = 0; $x < 8; $x++) {\n        if (($x == 0 && ($y == 0 || $y == 7)) || ($x == 7 && ($y == 0 || $y == 7))) {\n            continue; // skip the corners\n        }\n        $orig = createWhiteImageWithBlackPixelAt($x, $y);\n        $cropped = imagecropauto($orig, IMG_CROP_SIDES);\n        if (!$cropped) {\n            printf(\"Pixel at %d, %d: unexpected NULL crop\\n\", $x, $y);\n        } else {\n            $width = imagesx($cropped);\n            if ($width !== 1) {\n                printf(\"Pixel at %d, %d: unexpected width (%d)\\n\", $x, $y, $width);\n            }\n            $height = imagesy($cropped);\n            if ($height !== 1) {\n                printf(\"Pixel at %d, %d: unexpected height (%d)\\n\", $x, $y, $height);\n            }\n            $color = imagecolorat($cropped, 0, 0);\n            if ($color !== 0x000000) {\n                printf(\"Pixel at %d, %d: unexpected color (%d)\\n\", $x, $y, $color);\n            }\n            imagedestroy($cropped);\n        }\n        imagedestroy($orig);\n    }\n}\n?>\n===DONE===")).toMatchSnapshot();
  });
});
