// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/createfromstring.phpt
  it("imagecreatefromstring", function () {
    expect(parser.parseCode("<?php\n$dir = __DIR__;\n$im = imagecreatetruecolor(5,5);\nimagefill($im, 0,0, 0xffffff);\nimagesetpixel($im, 3,3, 0x0);\nimagepng($im, $dir . '/tc.png');\n$im_string = file_get_contents(__DIR__ . '/tc.png');\n$im = imagecreatefromstring($im_string);\necho 'createfromstring truecolor png: ';\nif (imagecolorat($im, 3,3) != 0x0) {\n    echo 'failed';\n} else {\n    echo 'ok';\n}\necho \"\\n\";\nunlink($dir . '/tc.png');\n$im = imagecreate(5,5);\n$c1 = imagecolorallocate($im, 255,255,255);\n$c2 = imagecolorallocate($im, 255,0,0);\nimagefill($im, 0,0, $c1);\nimagesetpixel($im, 3,3, $c2);\nimagepng($im, $dir . '/p.png');\n$im_string = file_get_contents(__DIR__ . '/p.png');\n$im = imagecreatefromstring($im_string);\necho'createfromstring palette png: ';\n$c = imagecolorsforindex($im, imagecolorat($im, 3,3));\n$failed = false;\nif ($c['red'] != 255 || $c['green'] != 0 || $c['blue'] != 0) {\n    echo 'failed';\n} else {\n    echo 'ok';\n}\necho \"\\n\";\nunlink($dir . '/p.png');\n//empty string\ntry {\n    imagecreatefromstring('');\n} catch (ValueError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\n//random string > 12\n$im = imagecreatefromstring(' asdf jklp foo');\n?>")).toMatchSnapshot();
  });
});
