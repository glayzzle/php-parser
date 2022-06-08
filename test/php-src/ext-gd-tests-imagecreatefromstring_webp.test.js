// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/imagecreatefromstring_webp.phpt
  it("imagecreatefromstring() - WEBP format", function () {
    expect(parser.parseCode("<?php\n// create an image from a WEBP string representation\n$im = imagecreatefromstring(file_get_contents(__DIR__ . '/imagecreatefromstring.webp'));\nvar_dump(imagesx($im));\nvar_dump(imagesy($im));\n?>")).toMatchSnapshot();
  });
});
