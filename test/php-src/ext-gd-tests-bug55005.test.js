// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/bug55005.phpt
  it("Bug #55005 (imagepolygon num_points requirement)", function () {
    expect(parser.parseCode("<?php\nrequire_once __DIR__ . '/func.inc';\n$g = imagecreate(300, 300);\n$bgnd = imagecolorallocate($g, 255, 255, 255);\n$fgnd = imagecolorallocate($g, 0, 0, 0);\ntrycatch_dump(\n    fn () => imagefilledpolygon($g, array(100,10, 100,100, 180,100), 2, $fgnd),\n    fn () => imagepolygon($g, array(200,10, 200,100, 280,100), 2, $fgnd)\n);\n?>")).toMatchSnapshot();
  });
});
