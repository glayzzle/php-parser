// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/exif/tests/bug78256.phpt
  it("Bug #78256 (heap-buffer-overflow on exif_process_user_comment)", function () {
    expect(parser.parseCode("<?php\n@exif_read_data(__DIR__.\"/bug78256.jpg\", 'COMMENT', FALSE, TRUE);\n?>\nDONE")).toMatchSnapshot();
  });
});
