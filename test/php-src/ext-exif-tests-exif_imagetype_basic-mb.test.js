// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/exif/tests/exif_imagetype_basic-mb.phpt
  it("Check for exif_imagetype default behaviour", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing exif_imagetype() : basic functionality ***\\n\";\nvar_dump(exif_imagetype(__DIR__.'/test2私はガラスを食べられます.jpg'));\n?>")).toMatchSnapshot();
  });
});
