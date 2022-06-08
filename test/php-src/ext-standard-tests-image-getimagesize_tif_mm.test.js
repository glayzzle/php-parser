// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/image/getimagesize_tif_mm.phpt
  it("GetImageSize() for tiff format with big-endian (aka Motorola, aka MM) ordering", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing getimagesize() : tiff_mm format ***\\n\";\nvar_dump(getimagesize(__DIR__ . \"/2x2mm.tiff\", $arr));\nvar_dump($arr);\n?>")).toMatchSnapshot();
  });
});
