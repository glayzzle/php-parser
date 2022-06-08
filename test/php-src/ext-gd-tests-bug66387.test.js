// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/bug66387.phpt
  it("Bug #66387 (Stack overflow with imagefilltoborder)", function () {
    expect(parser.parseCode("<?php\n$im = imagecreatetruecolor(20, 20);\n$c = imagecolorallocate($im, 255, 0, 0);\nimagefilltoborder($im, 0, -999355, $c, $c);\necho \"ready\\n\";\n?>")).toMatchSnapshot();
  });
});
