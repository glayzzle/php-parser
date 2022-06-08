// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/imageloadfont_error2.phpt
  it("Testing that imageloadfont() breaks on invalid file passed as first argument", function () {
    expect(parser.parseCode("<?php\nvar_dump( imageloadfont('\\src\\invalidfile.font') );\n?>")).toMatchSnapshot();
  });
});
