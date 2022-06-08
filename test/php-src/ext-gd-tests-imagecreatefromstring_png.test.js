// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/imagecreatefromstring_png.phpt
  it("imagecreatefromstring() - PNG format", function () {
    expect(parser.parseCode("<?php\n// create an image from a PNG string representation\n$im = imagecreatefromstring(file_get_contents(__DIR__ . '/imagecreatefromstring.gif'));\nvar_dump(imagesx($im));\nvar_dump(imagesy($im));\n?>")).toMatchSnapshot();
  });
});
