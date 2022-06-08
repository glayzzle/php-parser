// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/exif/tests/bug77564/bug77564.phpt
  it("Bug 77564 (Memory leak in exif_process_IFD_TAG)", function () {
    expect(parser.parseCode("<?php\nvar_dump(exif_read_data(__DIR__ . '/bug77564.jpg'));\n?>\nDONE")).toMatchSnapshot();
  });
});
