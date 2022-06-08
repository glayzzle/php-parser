// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/libxml/tests/bug42112.phpt
  it("Bug #42112 (deleting a node produces memory corruption)", function () {
    expect(parser.parseCode("<?php\n$xml = <<<EOXML\n<root><child xml:id=\"id1\">baz</child></root>\nEOXML;\nfunction remove_node($doc) {\n    $node = $doc->getElementById( 'id1' );\n    print 'Deleting Node: '.$node->nodeName.\"\\n\";\n    $node->parentNode->removeChild( $node );\n}\n$doc = new DOMDocument();\n$doc->loadXML($xml);\nremove_node($doc);\n$node = $doc->getElementById( 'id1' );\nif ($node) {\n    print 'Found Node: '.$node->nodeName.\"\\n\";\n}\n$root = $doc->documentElement;\nprint 'Root Node: '.$root->nodeName.\"\\n\";\n?>")).toMatchSnapshot();
  });
});
