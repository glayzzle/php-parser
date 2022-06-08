// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/bug74435.phpt
  it("Bug #74435 (Buffer over-read into uninitialized memory)", function () {
    expect(parser.parseCode("<?php\n$im = imagecreatefromgif(__DIR__ . DIRECTORY_SEPARATOR . 'bug74435.gif');\nvar_dump($im);\n$width = imagesx($im);\n$height = imagesy($im);\nfor ($i = 0; $i < $width; $i += 16) {\n    for ($j = 0; $j < $height; $j += 16) {\n        if (($index = imagecolorat($im, $i, $j)) >= 2) {\n            list($red, $green, $blue, $alpha) = array_values(imagecolorsforindex($im, $index));\n            if ($red !== 0 || $green !== 0 || $blue !== 0 || $alpha !== 0) {\n                echo \"unexpected color at ($i, $j)\\n\";\n            }\n        }\n    }\n}\n?>")).toMatchSnapshot();
  });
});
