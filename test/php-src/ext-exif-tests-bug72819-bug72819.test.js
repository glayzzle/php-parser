// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/exif/tests/bug72819/bug72819.phpt
  it("Bug #72819 (EXIF thumbnails not read anymore)", function () {
    expect(parser.parseCode("<?php\n$infile = __DIR__.'/bug72819.jpg';\nvar_dump(strlen(exif_thumbnail($infile)));\n?>")).toMatchSnapshot();
  });
});
