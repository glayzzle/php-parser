// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/DOMDocument_loadHTML_basic.phpt
  it("DOMDocument::loadHTML", function () {
    expect(parser.parseCode("<?php\n$doc = new DOMDocument();\n$doc->loadHTML(\"<html><body><p>Test<br></p></body></html>\");\necho $doc->saveHTML();\n?>")).toMatchSnapshot();
  });
});
