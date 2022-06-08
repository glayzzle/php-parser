// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/exif/tests/bug54002.phpt
  it("Bug #54002 (crash on crafted tag)", function () {
    expect(parser.parseCode("<?php\nexif_read_data(__DIR__ . '/bug54002_1.jpg');\nexif_read_data(__DIR__ . '/bug54002_2.jpg');\n?>")).toMatchSnapshot();
  });
});
