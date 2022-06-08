// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/exif/tests/bug76164.phpt
  it("Bug #76164 (exif_read_data zend_mm_heap corrupted)", function () {
    expect(parser.parseCode("<?php\n$var1 = 'nonexistentfile';\n$var2 = 2200000000;\n@exif_read_data($var1, $var2); // we're not interested in the warning, here\n$var2 = 1;\n?>\n===DONE===")).toMatchSnapshot();
  });
});
