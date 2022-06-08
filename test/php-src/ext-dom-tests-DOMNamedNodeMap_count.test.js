// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/DOMNamedNodeMap_count.phpt
  it("Test count nodes in DOMNamedNodeMap", function () {
    expect(parser.parseCode("<?php\n$document = new DomDocument();\n$root = $document->createElement('root');\n$document->appendChild($root);\nfor($i = 0; $i < 5; $i++) {\n    $root->setAttribute('attribute-' . $i, 'value-' . $i);\n}\nfor($i = 0; $i < 7; $i++) {\n    $item = $document->createElement('item');\n    $root->appendChild($item);\n}\nvar_dump($root->attributes->length);\nvar_dump($root->attributes->count());\nvar_dump(count($root->attributes));\n?>")).toMatchSnapshot();
  });
});
