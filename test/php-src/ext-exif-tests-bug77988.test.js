// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/exif/tests/bug77988.phpt
  it("Bug #77988 (heap-buffer-overflow on php_jpg_get16)", function () {
    expect(parser.parseCode("<?php\nexif_read_data(__DIR__.\"/bug77988.jpg\", 'COMMENT', FALSE, TRUE);\n?>\nDONE")).toMatchSnapshot();
  });
});
