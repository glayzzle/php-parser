// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/DOMDocument_loadHTMLfile_variation2.phpt
  it("Test DOMDocument::loadHTMLFile when a not-well formed document is loaded", function () {
    expect(parser.parseCode("<?php\n$doc = new DOMDocument();\n$result = $doc->loadHTMLFile(__DIR__ . \"/not_well.html\");\nassert($result === true);\n?>")).toMatchSnapshot();
  });
});
