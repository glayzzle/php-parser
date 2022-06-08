// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/image/getimagesize_swc.phpt
  it("GetImageSize() for compressed swf files", function () {
    expect(parser.parseCode("<?php\n    var_dump(getimagesize(__DIR__ . \"/test13pix.swf\"));\n?>")).toMatchSnapshot();
  });
});
