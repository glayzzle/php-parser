// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/imagepalettetotruecolor_basic.phpt
  it("does the imagepalettetotruecollor function really converts the image palette?", function () {
    expect(parser.parseCode("<?php\n$im = imagecreate(100, 100);\nvar_dump($im instanceof GdImage);\nvar_dump(imageistruecolor($im));\nvar_dump(imagepalettetotruecolor($im));\nvar_dump(imageistruecolor($im));\nimagedestroy($im);\n?>")).toMatchSnapshot();
  });
});
