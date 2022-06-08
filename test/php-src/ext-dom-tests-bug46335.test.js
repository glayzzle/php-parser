// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/bug46335.phpt
  it("Bug #46335 (DOMText::splitText doesn't handle multibyte characters).", function () {
    expect(parser.parseCode("<?php\n$textascii = 'This is an \"example\" of using DOM splitText';\n$text = 'This is an ‘example’ of using DOM splitText';\n$start = 30;\n$length = 3;\n$dom = new DOMDocument('1.0', 'UTF-8');\n$node = $dom->createTextNode($textascii);\n$dom->appendChild($node);\nprint \"Text: $node->textContent\\n\";\n$matched = $node->splitText($start);\n$matched->splitText($length);\nprint \"splitText (ASCII): $matched->textContent\\n\";\n$node = $dom->createTextNode($text);\n$dom->appendChild($node);\nprint \"Text: $node->textContent\\n\";\n$matched = $node->splitText($start);\n$matched->splitText($length);\nprint \"splitText (UTF-8): $matched->textContent\\n\";\n?>")).toMatchSnapshot();
  });
});
