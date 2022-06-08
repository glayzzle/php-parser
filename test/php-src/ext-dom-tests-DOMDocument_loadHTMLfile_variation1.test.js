// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/DOMDocument_loadHTMLfile_variation1.phpt
  it("Test DOMDocument::loadHTMLFile when an empty document is loaded", function () {
    expect(parser.parseCode("<?php\n$doc = new DOMDocument();\n$result = $doc->loadHTMLFile(__DIR__ . \"/empty.html\");\nassert($result === true);\n?>")).toMatchSnapshot();
  });
});
