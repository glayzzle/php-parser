// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/exif/tests/bug62523_3.phpt
  it("Bug 62523 (php crashes with segfault when exif_read_data called)", function () {
    expect(parser.parseCode("<?php\necho \"Test\\n\";\nvar_dump(exif_read_data(__DIR__.\"/bug62523_3.jpg\"));\n?>\nDone")).toMatchSnapshot();
  });
});
