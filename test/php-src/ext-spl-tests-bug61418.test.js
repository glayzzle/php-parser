// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug61418.phpt
  it("Bug #61418: Segmentation fault using FiltesystemIterator & RegexIterator", function () {
    expect(parser.parseCode("<?php\n$fileIterator = new FilesystemIterator(__DIR__, FilesystemIterator::KEY_AS_FILENAME);\n$regexpIterator = new RegexIterator($fileIterator, '#.*#');\nforeach ($fileIterator as $key => $file)\n{\n}\nunset($regexpIterator);\nunset($fileIterator);\n$dirIterator = new DirectoryIterator(__DIR__);\n$regexpIterator2 = new RegexIterator($dirIterator, '#.*#');\nforeach ($dirIterator as $key => $file)\n{\n}\nunset($regexpIterator2);\nunset($dirIterator);\n?>\n==DONE==")).toMatchSnapshot();
  });
});
