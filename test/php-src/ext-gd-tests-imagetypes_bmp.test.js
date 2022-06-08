// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/imagetypes_bmp.phpt
  it("imagetypes() - BMP support", function () {
    expect(parser.parseCode("<?php\nvar_dump((imagetypes() & IMG_BMP) == function_exists('imagebmp'));\n?>")).toMatchSnapshot();
  });
});
