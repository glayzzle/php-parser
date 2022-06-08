// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/exif/tests/bug76130.phpt
  it("Bug #76130 (Heap Buffer Overflow (READ: 1786) in exif_iif_add_value)", function () {
    expect(parser.parseCode("<?php\nexif_read_data(__DIR__ . '/bug76130_1.jpg');\nexif_read_data(__DIR__ . '/bug76130_2.jpg');\n?>\n===DONE===")).toMatchSnapshot();
  });
});
