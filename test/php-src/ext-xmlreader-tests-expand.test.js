// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/xmlreader/tests/expand.phpt
  it("XMLReader: Expand into existing DOM documet", function () {
    expect(parser.parseCode("<?php\n$basexml = '<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<books><book>base book</book></books>';\n$xmlstring = '<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<books><book>new book</book></books>';\n$dom = new DOMDocument();\n$dom->loadXML($basexml);\n$reader = new XMLReader();\n$reader->XML($xmlstring);\nwhile ($reader->read()) {\n    if ($reader->localName == \"book\") {\n        $node = $reader->expand($dom);\n        if ($node->ownerDocument) {\n            echo $node->ownerDocument->documentElement->firstChild->textContent . \"\\n\";\n        }\n        break;\n    }\n}\n$reader->close();\n?>")).toMatchSnapshot();
  });
});
