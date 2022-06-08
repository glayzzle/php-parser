// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/DomNodeList_count.phpt
  it("Test count nodes in DOMNodeList", function () {
    expect(parser.parseCode("<?php\n$document = new DomDocument();\n$root = $document->createElement('root');\n$document->appendChild($root);\nfor($i = 0; $i < 5; $i++) {\n    $root->setAttribute('attribute-' . $i, 'value-' . $i);\n}\nfor($i = 0; $i < 7; $i++) {\n    $item = $document->createElement('item');\n    $root->appendChild($item);\n}\nvar_dump($root->childNodes->length);\nvar_dump($root->childNodes->count());\nvar_dump(count($root->childNodes));\n?>")).toMatchSnapshot();
  });
});
