// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/tar/bug49910.phpt
  it("Bug #49910: no support for ././@LongLink for long filenames in phar tar support", function () {
    expect(parser.parseCode("<?php\n$fname = str_replace('\\\\', '/', __DIR__ . '/files/Structures_Graph-1.0.3.tgz');\n$tar = new PharData($fname);\n$files = array();\nforeach (new RecursiveIteratorIterator($tar) as $file) {\n    $files[] = str_replace($fname, '*', $file->getPathName());\n}\nprint_r($files);\n?>")).toMatchSnapshot();
  });
});
