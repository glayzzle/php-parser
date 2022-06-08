// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/exif/tests/duplicate_copyright_tag_leak.phpt
  it("OSS-Fuzz #17474: Memory leak on duplicate Copyright tags", function () {
    expect(parser.parseCode("<?php\n// Only checking for an absence of leaks here.\n@exif_read_data(__DIR__ . '/duplicate_copyright_tag_leak.tiff');\n?>\n===DONE===")).toMatchSnapshot();
  });
});
