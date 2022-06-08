// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/bug27675.phpt
  it("Bug #27675 (str_ireplace segfaults when shrinking string)", function () {
    expect(parser.parseCode("<?php\necho str_ireplace('/*<B>', '<B>', '/*<b> I am a comment</b>*/');\n?>")).toMatchSnapshot();
  });
});
