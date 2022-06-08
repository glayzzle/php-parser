// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/exif/tests/exif_imagetype_error.phpt
  it("Test exif_imagetype() function : error conditions", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing exif_imagetype() : error conditions ***\\n\";\necho \"\\n-- Testing exif_imagetype() function with an unknown file  --\\n\";\nvar_dump( exif_imagetype(__DIR__.'/foo.jpg') );\n?>")).toMatchSnapshot();
  });
});
