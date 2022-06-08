// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/exif/tests/tag_with_illegal_zero_components.phpt
  it("OSS-Fuzz #17163: Out-of-bounds read due to tag with zero components", function () {
    expect(parser.parseCode("<?php\nvar_dump(exif_read_data(__DIR__ . '/tag_with_illegal_zero_components.jpeg'));\n?>")).toMatchSnapshot();
  });
});
