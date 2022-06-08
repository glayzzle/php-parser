// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/dom006.phpt
  it("Test 6: Extends Test", function () {
    expect(parser.parseCode("<?php\nClass books extends domDocument {\n    function addBook($title, $author) {\n        $titleElement = $this->createElement(\"title\");\n        $titleElement->appendChild($this->createTextNode($title));\n        $authorElement = $this->createElement(\"author\");\n        $authorElement->appendChild($this->createTextNode($author));\n        $bookElement = $this->createElement(\"book\");\n        $bookElement->appendChild($titleElement);\n        $bookElement->appendChild($authorElement);\n        $this->documentElement->appendChild($bookElement);\n    }\n}\n$dom = new books;\n$dom->load(__DIR__.\"/book.xml\");\n$dom->addBook(\"PHP de Luxe\", \"Richard Samar, Christian Stocker\");\nprint $dom->saveXML();\n?>")).toMatchSnapshot();
  });
});
