// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/touch_variation1.phpt
  it("touch() with times", function () {
    expect(parser.parseCode("<?php\n$filename = __DIR__.\"/touch_variation1.dat\";\nvar_dump(touch($filename, 101));\nvar_dump(filemtime($filename));\nvar_dump(fileatime($filename));\n@unlink($filename);\n@unlink($filename);\nvar_dump(touch($filename, 100, 102));\nvar_dump(filemtime($filename));\nvar_dump(fileatime($filename));\n@unlink($filename);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
