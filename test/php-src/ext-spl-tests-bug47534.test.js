// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug47534.phpt
  it("SPL: RecursiveDirectoryIterator bug 47534", function () {
    expect(parser.parseCode("<?php\n$it1 = new RecursiveDirectoryIterator(__DIR__, FileSystemIterator::CURRENT_AS_PATHNAME);\n$it1->rewind();\necho gettype($it1->current()).\"\\n\";\n$it2 = new RecursiveDirectoryIterator(__DIR__);\n$it2->rewind();\necho gettype($it2->current()).\"\\n\";\n?>")).toMatchSnapshot();
  });
});
