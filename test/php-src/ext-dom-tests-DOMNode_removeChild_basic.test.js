// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/DOMNode_removeChild_basic.phpt
  it("DOM removeChild : Basic Functionality", function () {
    expect(parser.parseCode("<?php\n$xml = <<< EOXML\n<?xml version=\"1.0\" encoding=\"ISO-8859-1\"?>\n<courses>\n    <course title=\"one\">\n        <notes>\n            <note>c1n1</note>\n            <note>c1n2</note>\n        </notes>\n    </course>\n    <course title=\"two\">\n        <notes>\n            <note>c2n1</note>\n            <note>c2n2</note>\n        </notes>\n    </course>\n</courses>\nEOXML;\nfunction dumpcourse($current) {\n    $title = ($current->nodeType != XML_TEXT_NODE && $current->hasAttribute('title')) ? $current->getAttribute('title'):\"no title\";\n    echo \"Course: $title:\";echo get_class($current), \"\\n\";\n    echo \"~\";var_dump($current->textContent);\n}\n$dom = new DOMDocument();\n$dom->loadXML($xml);\n$root = $dom->documentElement;\n$children = $root->childNodes;\n$len = $children->length;\necho \"original has $len nodes\\n\";\nfor ($index = $children->length - 1; $index >=0; $index--) {\n    echo \"node $index\\n\";\n    $current = $children->item($index);\n    dumpcourse($current);\n    if ($current->nodeType == XML_TEXT_NODE) {\n        $noderemoved = $root->removeChild($current);\n    }\n}\n$children = $root->childNodes;\n$len = $children->length;\necho \"after text removed it now has $len nodes\\n\";\nfor ($index = 0; $index < $children->length; $index++) {\n    echo \"node $index\\n\";\n    $current = $children->item($index);\n    dumpcourse($current);\n}\n?>")).toMatchSnapshot();
  });
});
