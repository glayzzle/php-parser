// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/imagecreatefromstring_gif.phpt
  it("imagecreatefromstring() - GIF format", function () {
    expect(parser.parseCode("<?php\n// create an image from a GIF string representation\n$im = imagecreatefromstring(file_get_contents(__DIR__ . '/imagecreatefromstring.gif'));\nvar_dump(imagesx($im));\nvar_dump(imagesy($im));\n?>")).toMatchSnapshot();
  });
});
