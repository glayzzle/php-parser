// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/imageistruecolor_basic.phpt
  it("Testing imageistruecolor() of GD library", function () {
    expect(parser.parseCode("<?php\n$image = imagecreatetruecolor(180, 30);\nvar_dump(imageistruecolor($image));\n?>")).toMatchSnapshot();
  });
});
