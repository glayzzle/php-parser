// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/DirectoryIterator_getExtension_basic.phpt
  it("SPL: DirectoryIterator::getExtension() basic test", function () {
    expect(parser.parseCode("<?php\n$dir = __DIR__ . DIRECTORY_SEPARATOR . md5('DirectoryIterator::getExtension') . DIRECTORY_SEPARATOR;\nif (!mkdir($dir)) {\n    die('Failed to create test directory');\n}\n$files = array('test.txt', 'test.extension', 'test');\nforeach ($files as $file) {\n    touch($dir . $file);\n}\n$dit_exts = array();\n$nfo_exts = array();\nforeach (new DirectoryIterator($dir) as $file) {\n    if ($file->isDot()) {\n        continue;\n    }\n    $dit_exts[] = $file->getExtension();\n    $nfo_exts[] = pathinfo($file->getFilename(), PATHINFO_EXTENSION);\n}\nvar_dump($dit_exts === $nfo_exts);\nsort($dit_exts);\nvar_dump($dit_exts);\n?>")).toMatchSnapshot();
  });
});
