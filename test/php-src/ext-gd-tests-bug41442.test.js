// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/bug41442.phpt
  it("Bug #41442 (imagegd2() under output control)", function () {
    expect(parser.parseCode("<?php\n$str = file_get_contents(__DIR__.'/src.gd2');\n$res = imagecreatefromstring($str);\n/* string */\nob_start();\nimagegd2($res);\n$str2 = ob_get_clean();\nvar_dump(imagecreatefromstring($str2));\n/* file */\n$file = __DIR__.\"/bug41442.gd2\";\nimagegd2($res, $file);\n$str2 = file_get_contents($file);\nvar_dump(imagecreatefromstring($str2));\n@unlink($file);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
