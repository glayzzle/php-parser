// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/exif/tests/exif_tagname_basic.phpt
  it("Test exif_tagname() function : basic functionality", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing exif_tagname() : basic functionality ***\\n\";\nvar_dump(exif_tagname(0x10E));\nvar_dump(exif_tagname(0x10F));\nvar_dump(exif_tagname(0x110));\n?>")).toMatchSnapshot();
  });
});
