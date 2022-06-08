// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/bug69679.phpt
  it("Bug #69679 (DOMDocument::loadHTML refuses to accept NULL bytes)", function () {
    expect(parser.parseCode("<?php\n$doc = new DOMDocument();\n$html = \"<!DOCTYPE html><html><head><meta charset='UTF-8'></head><body>U+0000 <span>\\x0</span></body></html>\";\n$doc->loadHTML($html);\nprint($doc->saveHTML());\n?>")).toMatchSnapshot();
  });
});
