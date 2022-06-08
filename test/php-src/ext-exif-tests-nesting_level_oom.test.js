// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/exif/tests/nesting_level_oom.phpt
  it("Should not cause OOM", function () {
    expect(parser.parseCode("<?php\nvar_dump(@exif_read_data(__DIR__ . '/nesting_level_oom.tiff'));\n?>")).toMatchSnapshot();
  });
});
