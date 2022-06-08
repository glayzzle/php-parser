// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/exif/tests/bug78910.phpt
  it("Bug #78910: Heap-buffer-overflow READ in exif (OSS-Fuzz #19044)", function () {
    expect(parser.parseCode("<?php\nvar_dump(exif_read_data('data:image/jpg;base64,TU0AKgAAAAwgICAgAAIBDwAEAAAAAgAAACKSfCAgAAAAAEZVSklGSUxN'));\n?>")).toMatchSnapshot();
  });
});
