// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/bug40836.phpt
  it("Bug #40836 (Segfault in insertBefore)", function () {
    expect(parser.parseCode("<?php\n$dom = new DOMDocument(\"1.0\", \"UTF-8\");\n$dom->preserveWhiteSpace = false;\n$xml = '<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<feed xmlns=\"http://www.w3.org/2005/Atom\">\n  <entry xmlns=\"http://www.w3.org/2005/Atom\">\n    <updated>2007-02-14T00:00:00+01:00</updated>\n    <content>\n      <div xmlns=\"http://www.w3.org/1999/xhtml\">\n        <p>paragraph</p>\n      </div>\n    </content>\n  </entry>\n</feed>';\n$dom->loadXML($xml);\n$entry = $dom->getElementsByTagNameNS(\"http://www.w3.org/2005/Atom\", \"entry\")->item(0);\n$contentNode = $entry->getElementsByTagName(\"content\")->item(0)->firstChild;\n$dateNode = $entry->getElementsByTagName(\"updated\")->item(0)->firstChild;\n$contentNode->firstChild->insertBefore($dateNode);\necho $dom->saveXML();\n?>")).toMatchSnapshot();
  });
});
