// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/bug70976.phpt
  it("Bug #70976 (Memory Read via gdImageRotateInterpolated Array Index Out of Bounds)", function () {
    expect(parser.parseCode("<?php\n$img = imagerotate(imagecreate(10,10),45,0x7ffffff9);\nvar_dump($img);\n?>")).toMatchSnapshot();
  });
});
