// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/DOMDocument_loadHTMLfile_error1.phpt
  it("Test DOMDocument::loadHTMLFile when the file doesn't exist", function () {
    expect(parser.parseCode("<?php\n$doc = new DOMDocument();\n$result = $doc->loadHTMLFile(__DIR__ . \"/ffff/test.html\");\nassert($result === false);\n?>")).toMatchSnapshot();
  });
});
