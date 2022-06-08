// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/DOMDocument_loadHTMLfile.phpt
  it("Test DOMDocument::loadHTMLFile", function () {
    expect(parser.parseCode("<?php\n$doc = new DOMDocument();\n$result = $doc->loadHTMLFile(__DIR__ . \"/test.html\");\nassert($result === true);\n?>")).toMatchSnapshot();
  });
});
