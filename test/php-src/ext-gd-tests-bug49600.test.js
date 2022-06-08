// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/bug49600.phpt
  it("Bug #49600 (imageTTFText text shifted right)", function () {
    expect(parser.parseCode("<?php\n$cwd = __DIR__;\n$font = \"$cwd/Tuffy.ttf\";\n$image = imagecreatetruecolor(50, 50);\n$color = imagecolorallocate($image, 255, 255, 255);\nforeach (array(\"E\", \"I\", \"P\", \"g\", \"i\", \"q\") as $c)\n{\n    $x = imagettftext($image, 32, 0, 0, 0, $color, $font, $c);\n    $y = imagettfbbox(32, 0, \"$cwd/Tuffy.ttf\", $c);\n    if ( abs($x[0] - $y[0]) > 1\n      || abs($x[2] - $y[2]) > 1\n      || abs($x[4] - $y[4]) > 1\n      || abs($x[6] - $y[6]) > 1 ) {\n      echo \"FAILED: \\n\";\n      var_dump($x);\n      var_dump($y);\n      exit;\n    }\n}\necho 'OK';\n?>")).toMatchSnapshot();
  });
});
