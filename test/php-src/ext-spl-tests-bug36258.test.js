// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug36258.phpt
  it("Bug #36258 (SplFileObject::getPath() may lead to segfault)", function () {
    expect(parser.parseCode("<?php\n$diriter = new RecursiveIteratorIterator( new RecursiveDirectoryIterator('.') );\nforeach ($diriter as $key => $file) {\n    var_dump($file->getFilename());\n    var_dump($file->getPath());\n    break;\n}\n?>")).toMatchSnapshot();
  });
});
