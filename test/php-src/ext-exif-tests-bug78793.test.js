// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/exif/tests/bug78793.phpt
  it("Bug #78793: Use-after-free in exif parsing under memory sanitizer", function () {
    expect(parser.parseCode("<?php\n$f = \"ext/exif/tests/bug77950.tiff\";\nfor ($i = 0; $i < 10; $i++) {\n    @exif_read_data($f);\n}\n?>\n===DONE===")).toMatchSnapshot();
  });
});
