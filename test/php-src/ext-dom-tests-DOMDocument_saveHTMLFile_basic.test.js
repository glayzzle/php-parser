// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/DOMDocument_saveHTMLFile_basic.phpt
  it("DOMDocument::saveHTMLFile() should dump the internal document into a file using HTML formatting", function () {
    expect(parser.parseCode("<?php\n$filename = __DIR__.\"/DOMDocument_saveHTMLFile_basic.html\";\n$doc = new DOMDocument('1.0');\n$root = $doc->createElement('html');\n$root = $doc->appendChild($root);\n$head = $doc->createElement('head');\n$head = $root->appendChild($head);\n$title = $doc->createElement('title');\n$title = $head->appendChild($title);\n$text = $doc->createTextNode('This is the title');\n$text = $title->appendChild($text);\n$bytes = $doc->saveHTMLFile($filename);\nvar_dump($bytes);\necho file_get_contents($filename);\nunlink($filename);\n?>")).toMatchSnapshot();
  });
});
