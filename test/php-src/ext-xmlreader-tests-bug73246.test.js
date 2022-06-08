// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/xmlreader/tests/bug73246.phpt
  it("Bug #73246 (XMLReader: encoding length not checked)", function () {
    expect(parser.parseCode("<?php\n$reader = new XMLReader();\n$reader->open(__FILE__, \"UTF\\0-8\");\n$reader->XML('<?xml version=\"1.0\"?><root/>', \"UTF\\0-8\");\n?>")).toMatchSnapshot();
  });
});
