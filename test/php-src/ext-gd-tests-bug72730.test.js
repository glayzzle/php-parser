// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/bug72730.phpt
  it("Bug #72730: imagegammacorrect allows arbitrary write access", function () {
    expect(parser.parseCode("<?php\nrequire __DIR__ . '/func.inc';\n$img =  imagecreatetruecolor(1, 1);\ntrycatch_dump(\n    fn() => imagegammacorrect($img, -1, 1337)\n);\n?>")).toMatchSnapshot();
  });
});
