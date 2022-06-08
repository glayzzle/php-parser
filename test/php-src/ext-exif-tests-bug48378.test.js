// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/exif/tests/bug48378.phpt
  it("Bug #48378 (Infinite recursion due to corrupt JPEG)", function () {
    expect(parser.parseCode("<?php\nexif_read_data(\n__DIR__ . \"/bug48378.jpg\",\n\"FILE,COMPUTED,ANY_TAG\"\n);\n?>")).toMatchSnapshot();
  });
});
