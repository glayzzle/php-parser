// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/copypalette.phpt
  it("imagepalettecopy", function () {
    expect(parser.parseCode("<?php\n$failed = false;\n$im = imagecreate(1,1);\nfor ($i=0; $i<256; $i++) {\n    imagecolorallocate($im, $i, $i, $i);\n}\n$im2 = imagecreate(1,1);\nimagepalettecopy($im2, $im);\nfor ($i=0; $i<256; $i++) {\n    $c = imagecolorsforindex($im2, $i);\n    if ($c['red']!=$i || $c['green']!=$i || $c['blue']!=$i) {\n        $failed = true;\n        break;\n    }\n}\necho \"copy palette 255 colors: \";\necho $failed ? 'failed' : 'ok';\necho \"\\n\";\n$im = imagecreate(1,1);\n$im2 = imagecreate(1,1);\nimagecolorallocatealpha($im, 0,0,0,100);\nimagepalettecopy($im2, $im);\n$c = imagecolorsforindex($im2, 0);\nif ($c['red']!=0 || $c['green']!=0 || $c['blue']!=0 || $c['alpha']!=100) {\n    $failed = true;\n}\necho 'copy palette 1 color and alpha: ';\necho $failed ? 'failed' : 'ok';\necho \"\\n\";\n?>")).toMatchSnapshot();
  });
});
