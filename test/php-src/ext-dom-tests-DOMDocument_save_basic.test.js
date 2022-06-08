// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/DOMDocument_save_basic.phpt
  it("DOMDocument::save  Test basic function of save method", function () {
    expect(parser.parseCode("<?php\n$doc = new DOMDocument('1.0');\n$doc->formatOutput = true;\n$root = $doc->createElement('book');\n$root = $doc->appendChild($root);\n$title = $doc->createElement('title');\n$title = $root->appendChild($title);\n$text = $doc->createTextNode('This is the title');\n$text = $title->appendChild($text);\n$temp_filename = __DIR__.\"/DomDocument_save_basic.tmp\";\necho 'Wrote: ' . $doc->save($temp_filename) . ' bytes'; // Wrote: 72 bytes\n?>")).toMatchSnapshot();
  });
});
