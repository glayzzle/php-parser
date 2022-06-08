// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/exif/tests/temporary_buffer_leak.phpt
  it("OSS-Fuzz: Temporary buffer leak in tag reading", function () {
    expect(parser.parseCode("<?php\nvar_dump(@exif_read_data(__DIR__ . '/temporary_buffer_leak.jpg'));\n?>")).toMatchSnapshot();
  });
});
