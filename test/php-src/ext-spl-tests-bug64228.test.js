// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug64228.phpt
  it("Bug #64228 (RecursiveDirectoryIterator always assumes SKIP_DOTS)", function () {
    expect(parser.parseCode("<?php\n$dirs = array();\n$empty_dir = __DIR__ . \"/empty\";\n@mkdir($empty_dir);\n$i = new RecursiveDirectoryIterator($empty_dir, FilesystemIterator::KEY_AS_PATHNAME | FilesystemIterator::CURRENT_AS_FILEINFO); // Note the absence of FilesystemIterator::SKIP_DOTS\nforeach ($i as $key => $value) {\n    $dirs[] = $value->getFileName();\n}\n@rmdir($empty_dir);\nsort($dirs);\nprint_r($dirs);\n?>")).toMatchSnapshot();
  });
});
