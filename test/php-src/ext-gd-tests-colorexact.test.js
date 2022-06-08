// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/colorexact.phpt
  it("imagecolorexact", function () {
    expect(parser.parseCode("<?php\n$im = imagecreatetruecolor(5,5);\n$c = imagecolorexact($im, 255,0,255);\n$c2 = imagecolorexactalpha($im, 255,0,255, 100);\nprintf(\"%X\\n\", $c);\nprintf(\"%X\\n\", $c2);\nimagedestroy($im);\n$im = imagecreate(5,5);\n$c = imagecolorallocate($im, 255,0,255);\n$c2 = imagecolorallocate($im, 255,200,0);\n$c3 = imagecolorallocatealpha($im, 255,200,0,100);\necho imagecolorexact($im, 255,0,255) . \"\\n\";\necho imagecolorexact($im, 255,200,0) . \"\\n\";\necho imagecolorexactalpha($im, 255,200,0,100) . \"\\n\";\n// unallocated index\necho imagecolorexact($im, 12,12,12) . \"\\n\";\nimagedestroy($im);\n?>")).toMatchSnapshot();
  });
});
