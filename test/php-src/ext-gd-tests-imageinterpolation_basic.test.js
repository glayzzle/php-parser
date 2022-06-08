// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/imageinterpolation_basic.phpt
  it("imagegetinterpolation() and imagesetinterpolation() basic test", function () {
    expect(parser.parseCode("<?php\n$methods = array(\n    IMG_BELL,\n    IMG_BESSEL,\n    IMG_BILINEAR_FIXED,\n    IMG_BICUBIC,\n    IMG_BICUBIC_FIXED,\n    IMG_BLACKMAN,\n    IMG_BOX,\n    IMG_BSPLINE,\n    IMG_CATMULLROM,\n    IMG_GAUSSIAN,\n    IMG_GENERALIZED_CUBIC,\n    IMG_HERMITE,\n    IMG_HAMMING,\n    IMG_HANNING,\n    IMG_MITCHELL,\n    IMG_NEAREST_NEIGHBOUR,\n    IMG_POWER,\n    IMG_QUADRATIC,\n    IMG_SINC,\n    IMG_TRIANGLE,\n    IMG_WEIGHTED4,\n);\n$im = imagecreate(8, 8);\nforeach ($methods as $method) {\n    imagesetinterpolation($im, $method);\n    var_dump(imagegetinterpolation($im) === $method);\n}\n?>")).toMatchSnapshot();
  });
});
