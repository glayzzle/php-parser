// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/exif/tests/bug74428/bug74428.phpt
  it("Bug #74428 (exif_read_data(): \"Illegal IFD size\" warning occurs with correct exif format)", function () {
    expect(parser.parseCode("<?php\n$infile = __DIR__.'/bug74428.jpg';\nvar_dump(exif_read_data($infile));\n?>")).toMatchSnapshot();
  });
});
