// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/exif/tests/bug68547.phpt
  it("Bug #68547 (Exif Header component value check error)", function () {
    expect(parser.parseCode("<?php\nvar_dump(exif_read_data(__DIR__ . DIRECTORY_SEPARATOR . 'bug68547.jpg'));\n?>")).toMatchSnapshot();
  });
});
