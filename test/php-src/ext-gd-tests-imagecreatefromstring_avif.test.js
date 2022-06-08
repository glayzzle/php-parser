// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/imagecreatefromstring_avif.phpt
  it("imagecreatefromstring() - AVIF format", function () {
    expect(parser.parseCode("<?php\n  echo \"Reading image whose major brand is 'avif':\\n\";\n  $im = imagecreatefromstring(file_get_contents(__DIR__ . '/imagecreatefromstring_major_brand.avif'));\n  var_dump(imagesx($im));\n  var_dump(imagesy($im));\n  echo \"Reading image with a compatible brand that's 'avif':\\n\";\n  $im = imagecreatefromstring(file_get_contents(__DIR__ . '/imagecreatefromstring_compatible_brand.avif'));\n  var_dump(imagesx($im));\n  var_dump(imagesy($im));\n?>")).toMatchSnapshot();
  });
});
