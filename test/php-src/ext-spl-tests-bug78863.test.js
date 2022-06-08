// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug78863.phpt
  it("Bug #78863 (DirectoryIterator class silently truncates after a null byte)", function () {
    expect(parser.parseCode("<?php\n$dir = __DIR__ . '/bug78863';\nmkdir($dir);\ntouch(\"$dir/bad\");\nmkdir(\"$dir/sub\");\ntouch(\"$dir/sub/good\");\n$it = new DirectoryIterator(__DIR__ . \"/bug78863\\0/sub\");\nforeach ($it as $fileinfo) {\n    if (!$fileinfo->isDot()) {\n        var_dump($fileinfo->getFilename());\n    }\n}\n?>")).toMatchSnapshot();
  });
});
