// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/dom004.phpt
  it("Test 4: Streams Test", function () {
    expect(parser.parseCode("<?php\n$dom = new domdocument;\n$dom->load(\"compress.zlib://\".__DIR__.\"/book.xml.gz\");\nprint $dom->saveXML();\n?>")).toMatchSnapshot();
  });
});
