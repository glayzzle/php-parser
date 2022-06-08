// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/bug77391.phpt
  it("Bug #77391 (1bpp BMPs may fail to be loaded)", function () {
    expect(parser.parseCode("<?php\nvar_dump(imagecreatefrombmp(__DIR__ . '/bug77391.bmp'));\n?>")).toMatchSnapshot();
  });
});
