// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/DOMDocument_saveHTML_variant1.phpt
  it("DOMDocument::saveHTML() optional parameters", function () {
    expect(parser.parseCode("<?php\n$doc = new DOMDocument('1.0');\n$root = $doc->createElement('html');\n$root = $doc->appendChild($root);\n$head = $doc->createElement('head');\n$head = $root->appendChild($head);\n$title = $doc->createElement('title');\n$title = $head->appendChild($title);\n$text = $doc->createTextNode('This is the title');\n$text = $title->appendChild($text);\necho $doc->saveHTML(NULL), \"\\n\";\necho $doc->saveHTML($title), \"\\n\";\n?>")).toMatchSnapshot();
  });
});
