// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/exif/tests/bug72603.phpt
  it("Bug #72603 (Out of bound read in exif_process_IFD_in_MAKERNOTE)", function () {
    expect(parser.parseCode("<?php\nvar_dump(count(exif_read_data(__DIR__ . \"/bug72603.jpg\")));\n?>")).toMatchSnapshot();
  });
});
