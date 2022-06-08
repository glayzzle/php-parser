// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/bug61221.phpt
  it("Bug #61221 - imagegammacorrect function loses alpha channel", function () {
    expect(parser.parseCode("<?php\n$imagew = 50;\n$imageh = 50;\n$img = imagecreatetruecolor($imagew, $imageh);\n$blacktransparent = imagecolorallocatealpha($img, 0, 0, 0, 127);\n$redsolid = imagecolorallocate($img, 255, 0, 0);\nimagefill($img, 0, 0, $blacktransparent);\nimageline($img, $imagew / 2, 0, $imagew / 2, $imageh - 1, $redsolid);\nimageline($img, 0, $imageh / 2, $imagew - 1, $imageh / 2, $redsolid);\nimagegammacorrect($img, 1, 1);\n$color = imagecolorat($img, 0, 0);\nvar_dump($color === $blacktransparent);\nimagedestroy($img);\n?>")).toMatchSnapshot();
  });
});
