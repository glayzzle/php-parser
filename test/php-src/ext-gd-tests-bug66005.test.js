// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/bug66005.phpt
  it("Bug #66005 (imagecopy does not support 1bit transparency on truecolor images)", function () {
    expect(parser.parseCode("<?php\n$dest = imagecreatetruecolor(150, 50);\n$transparent = imagecolorallocatealpha($dest, 255, 255, 255, 127);\nimagealphablending($dest, false);\nimagefill($dest, 1, 1, $transparent);\nimagesavealpha($dest, true);\n// Palette image with transparent color\n$png_palette = imagecreatefromstring(base64_decode('iVBORw0KGgoAAAANSUhEUgAAADIAAAAyAgMAAABjUWAiAAAACVBMVEUAAAD/AAD///9nGWQeAAAAAXRSTlMAQObYZgAAAEFJREFUKM9jYBimIASZIxoagOAwhoaGInisQJ4DksJQJKWoPCAnNIQYHsgChBX4eMSbiddlqH5A9R+q39HCZWgDAFxFGyOrmguhAAAAAElFTkSuQmCCPHP'));\n// 24 bit with transparent color\n$png_24 = imagecreatefromstring(base64_decode('iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAIAAACRXR/mAAAABnRSTlMAAAAAAABupgeRAAAAVklEQVRYw+3UQQqAMBAEwf3/p9eTBxEPiWAmWMU8oGFJqgAAuOpzWTX3xQUti+uRJTZ9V5aY1bOTFZLV7yZr9zt6ibv/qPXfrMpsGipbIy7oqQ8AYJED1plDy5PCu2sAAAAASUVORK5CYII='));\n// 32 bit with full alpha channel\n$png_full = imagecreatefromstring(base64_decode('iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAXklEQVRo3u3XMQrAIBBFwb3/pU2VwiJNIvjdzMD2PlBwqwAAAGajatxz9OGf5viA+KA3EXExXyKiYlqErIiIiBGSFLIyYmuMkO7Xy2MX4ovS/ONoH7Eh/m1nBwCASBe3VYeVaAy8PwAAAABJRU5ErkJggg=='));\nimagecopy($dest, $png_palette, 0, 0, 0, 0, 50, 50);\nimagecopy($dest, $png_24, 50, 0, 0, 0, 50, 50);\nimagecopy($dest, $png_full, 100, 0, 0, 0, 50, 50);\ninclude_once __DIR__ . '/func.inc';\ntest_image_equals_file(__DIR__ . '/bug66005.png', $dest);\n?>")).toMatchSnapshot();
  });
});
