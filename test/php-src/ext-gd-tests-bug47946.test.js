// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/bug47946.phpt
  it("Bug #47946 (ImageConvolution overwrites background)", function () {
    expect(parser.parseCode("<?php\nfunction array_flatten($array)\n{\n    $tempArray = array();\n    foreach ($array as $value) {\n        if (is_array($value)) {\n            $tempArray = array_merge($tempArray, array_flatten($value));\n        } else {\n            $tempArray[] = $value;\n        }\n    }\n    return $tempArray;\n}\nfunction makeFilter($resource, $matrix, $offset = 1.0)\n{\n    $divisor = array_sum(array_flatten($matrix));\n    if ($divisor == 0) {\n        $divisor = .01;\n    }\n    return imageconvolution($resource, $matrix, $divisor, $offset);\n}\n$edgeMatrix = array(array(1, 0, 1), array(0, 5, 0), array(1, 0, 1));\n$im = imagecreatetruecolor(40, 40);\nimagealphablending($im, false);\nimagefilledrectangle($im, 0, 0, 39, 39, 0x7fffffff);\nimagefilledellipse($im, 19, 19, 20, 20, 0x00ff00);\nimagesavealpha($im, true);\nmakeFilter($im, $edgeMatrix);\nrequire_once __DIR__ . '/func.inc';\ntest_image_equals_file(__DIR__ . '/bug47946_exp.png', $im);\n?>")).toMatchSnapshot();
  });
});
