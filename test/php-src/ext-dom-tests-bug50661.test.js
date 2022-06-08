// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/bug50661.phpt
  it("Bug #50661 (DOMDocument::loadXML does not allow UTF-16).", function () {
    expect(parser.parseCode("<?php\n$data = \"\\xFE\\xFF\\x00\\x3C\\x00\\x66\\x00\\x6F\\x00\\x6F\\x00\\x2F\\x00\\x3E\";\n$dom = new DOMDocument();\n$dom->loadXML($data);\necho $dom->saveXML();\n?>")).toMatchSnapshot();
  });
});
