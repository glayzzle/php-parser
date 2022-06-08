// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/imagegammacorrect_variation2.phpt
  it("Apply imagegammacorrect() to a step wedge", function () {
    expect(parser.parseCode("<?php\nrequire __DIR__ . DIRECTORY_SEPARATOR . 'func.inc';\ntest_gamma_both(1, 2);\ntest_gamma_both(1, 1);\ntest_gamma_both(2, 1);\nfunction test_gamma_both($in, $out)\n{\n    test_gamma($in, $out, 'imagecreate');\n    test_gamma($in, $out, 'imagecreatetruecolor');\n}\nfunction test_gamma($in, $out, $constructor)\n{\n    $im = $constructor(640, 480);\n    for ($j = 0; $j < 4; $j++) {\n        for ($i = 0; $i < 32; $i++) {\n            draw_cell($im, $i, $j);\n        }\n    }\n    imagegammacorrect($im, $in, $out);\n    $filename = __DIR__ . DIRECTORY_SEPARATOR\n        . \"imagegammacorrect_variation2_{$in}_{$out}.png\";\n    $kind = $constructor === 'imagecreate' ? 'palette' : 'truecolor';\n    echo \"$kind gamma ($in, $out): \";\n    test_image_equals_file($filename, $im);\n}\nfunction draw_cell($im, $x, $y)\n{\n    $x1 = 20 * $x;\n    $y1 = 120 * $y;\n    $x2 = $x1 + 19;\n    $y2 = $y1 + 119;\n    $color = cell_color($im, $x, $y);\n    imagefilledrectangle($im, $x1,$y1, $x2,$y2, $color);\n}\nfunction cell_color($im, $x, $y)\n{\n    $channel = 8 * $x + 4;\n    switch ($y) {\n        case 0:\n            return imagecolorallocate($im, $channel, $channel, $channel);\n        case 1:\n            return imagecolorallocate($im, $channel, 0, 0);\n        case 2:\n            return imagecolorallocate($im, 0, $channel, 0);\n        case 3:\n            return imagecolorallocate($im, 0, 0, $channel);\n    }\n}\n?>")).toMatchSnapshot();
  });
});
