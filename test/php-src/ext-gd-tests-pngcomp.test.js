// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/pngcomp.phpt
  it("png compression test", function () {
    expect(parser.parseCode("<?php\n    $cwd = __DIR__;\n    echo \"PNG compression test: \";\n        $im = imagecreatetruecolor(20,20);\n        imagefilledrectangle($im, 5,5, 10,10, 0xffffff);\n        imagepng($im, $cwd . '/test_pngcomp.png', 9);\n        $im2 = imagecreatefrompng($cwd . '/test_pngcomp.png');\n        $col = imagecolorat($im2, 8,8);\n        if ($col == 0xffffff) {\n                echo \"ok\\n\";\n        }\n    @unlink($cwd . \"/test_pngcomp.png\");\n?>")).toMatchSnapshot();
  });
});
