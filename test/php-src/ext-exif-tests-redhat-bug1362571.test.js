// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/exif/tests/redhat-bug1362571.phpt
  it("Redhat bug #1362571 (PHP not returning full results for exif_read_data function)", function () {
    expect(parser.parseCode("<?php\nvar_dump(strlen(exif_thumbnail(__DIR__ . DIRECTORY_SEPARATOR . 'redhat-bug1362571.jpg')) > 0);\n?>")).toMatchSnapshot();
  });
});
