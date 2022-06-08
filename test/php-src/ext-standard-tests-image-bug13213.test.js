// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/image/bug13213.phpt
  it("Bug #13213 (GetImageSize and wrong JPEG Comments)", function () {
    expect(parser.parseCode("<?php\nvar_dump(GetImageSize(__DIR__.'/bug13213.jpg'));\n?>")).toMatchSnapshot();
  });
});
