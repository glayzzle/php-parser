// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/bug78025.phpt
  it("Bug #78025 (segfault when accessing properties of DOMDocumentType)", function () {
    expect(parser.parseCode("<?php\n$htm = \"<!DOCTYPE><html></html>\";\n$dom = new DOMDocument;\n$dom->loadHTML($htm);\nvar_dump($dom->doctype->name);\n?>")).toMatchSnapshot();
  });
});
