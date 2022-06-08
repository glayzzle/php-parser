// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/bug65148.phpt
  it("Bug #65148 (imagerotate may alter image dimensions)", function () {
    expect(parser.parseCode("<?php\n$interpolations = array(\n    'IMG_BELL' => IMG_BELL,\n    'IMG_BESSEL' => IMG_BESSEL,\n    'IMG_BICUBIC' => IMG_BICUBIC,\n    'IMG_BICUBIC_FIXED' => IMG_BICUBIC_FIXED,\n    'IMG_BILINEAR_FIXED' => IMG_BILINEAR_FIXED,\n    'IMG_BLACKMAN' => IMG_BLACKMAN,\n    'IMG_BOX' => IMG_BOX,\n    'IMG_BSPLINE' => IMG_BSPLINE,\n    'IMG_CATMULLROM' => IMG_CATMULLROM,\n    'IMG_GAUSSIAN' => IMG_GAUSSIAN,\n    'IMG_GENERALIZED_CUBIC' => IMG_GENERALIZED_CUBIC,\n    'IMG_HERMITE' => IMG_HERMITE,\n    'IMG_HAMMING' => IMG_HAMMING,\n    'IMG_HANNING' => IMG_HANNING,\n    'IMG_MITCHELL' => IMG_MITCHELL,\n    'IMG_POWER' => IMG_POWER,\n    'IMG_QUADRATIC' => IMG_QUADRATIC,\n    'IMG_SINC' => IMG_SINC,\n    'IMG_NEAREST_NEIGHBOUR' => IMG_NEAREST_NEIGHBOUR,\n    'IMG_WEIGHTED4' => IMG_WEIGHTED4,\n    'IMG_TRIANGLE' => IMG_TRIANGLE,\n);\n$img = imagecreate(40, 20);\n$results = array();\nforeach ($interpolations as $name => $interpolation) {\n  imagesetinterpolation($img, $interpolation);\n  $t = imagecolorallocatealpha($img, 0, 0, 0, 127);\n  $imgr = imagerotate($img, -5, $t);\n  $results[$name] = array('x' => imagesx($imgr), 'y' => imagesy($imgr));\n  imagedestroy($imgr);\n}\nimagedestroy($img);\nprint_r($results);\n?>")).toMatchSnapshot();
  });
});
