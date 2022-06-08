// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/DOMDocument_saveHTMLFile_formatOutput.phpt
  it("DOMDocument::saveHTMLFile() should format output on demand", function () {
    expect(parser.parseCode("<?php\n$filename = __DIR__.\"/DOMDocument_saveHTMLFile_formatOutput.html\";\n$doc = new DOMDocument('1.0');\n$doc->formatOutput = true;\n$root = $doc->createElement('html');\n$root = $doc->appendChild($root);\n$head = $doc->createElement('head');\n$head = $root->appendChild($head);\n$title = $doc->createElement('title');\n$title = $head->appendChild($title);\n$text = $doc->createTextNode('This is the title');\n$text = $title->appendChild($text);\n$bytes = $doc->saveHTMLFile($filename);\nvar_dump($bytes);\necho file_get_contents($filename);\nunlink($filename);\n?>")).toMatchSnapshot();
  });
});
