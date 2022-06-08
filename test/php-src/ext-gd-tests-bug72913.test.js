// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/bug72913.phpt
  it("Bug #72913 (imagecopy() loses single-color transparency on palette images)", function () {
    expect(parser.parseCode("<?php\n$base64 = 'iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAIAAACRXR/mAAAABnRSTlMAAAAAAABu'\n    . 'pgeRAAAAVklEQVRYw+3UQQqAMBAEwf3/p9eTBxEPiWAmWMU8oGFJqgAAuOpzWTX3'\n    . 'xQUti+uRJTZ9V5aY1bOTFZLV7yZr9zt6ibv/qPXfrMpsGipbIy7oqQ8AYJED1plD'\n    . 'y5PCu2sAAAAASUVORK5CYII=';\n$src = imagecreatefromstring(base64_decode($base64));\n$dst = imagecreate(50, 50);\n$transparent = imagecolorallocatealpha($dst, 255, 255, 255, 127);\nimagealphablending($dst, false);\nimagesavealpha($dst, true);\nimagecopy($dst, $src, 0,0, 0,0, 50,50);\ninclude_once __DIR__ . '/func.inc';\ntest_image_equals_file(__DIR__ . '/bug72913.png', $dst);\n?>")).toMatchSnapshot();
  });
});
