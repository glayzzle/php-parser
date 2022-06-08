// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/exif/tests/bug79282.phpt
  it("Bug #79282: Use-of-uninitialized-value in exif", function () {
    expect(parser.parseCode("<?php\nvar_dump(exif_read_data('data://image/jpeg;base64,/9jhAAlFeGlmAAAg'));\n?>")).toMatchSnapshot();
  });
});
