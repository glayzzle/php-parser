// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/DOMText_appendData_basic.phpt
  it("DOMText::appendData basic functionality test", function () {
    expect(parser.parseCode("<?php\n$document = new DOMDocument;\n$root = $document->createElement('root');\n$document->appendChild($root);\n$text = $document->createElement('text');\n$root->appendChild($text);\n$textnode = $document->createTextNode('');\n$text->appendChild($textnode);\n$textnode->appendData('data');\necho \"Text Length (one append): \" . $textnode->length . \"\\n\";\n$textnode->appendData('><&\"');\necho \"Text Length (two appends): \" . $textnode->length . \"\\n\";\necho \"Text Content: \" . $textnode->data . \"\\n\";\necho \"\\n\" . $document->saveXML();\n?>")).toMatchSnapshot();
  });
});
