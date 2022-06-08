// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/imagetypes_tga.phpt
  it("imagetypes() - TGA support", function () {
    expect(parser.parseCode("<?php\nvar_dump((imagetypes() & IMG_TGA) == function_exists('imagecreatefromtga'));\n?>")).toMatchSnapshot();
  });
});
