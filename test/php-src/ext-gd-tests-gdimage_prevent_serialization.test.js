// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/gdimage_prevent_serialization.phpt
  it("GdImage instances must not be serialized", function () {
    expect(parser.parseCode("<?php\n    $img_src = imagecreatetruecolor(32, 32);\n    var_dump(serialize($img_src));\n?>")).toMatchSnapshot();
  });
});
