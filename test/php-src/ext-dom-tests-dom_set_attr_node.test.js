// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/dom_set_attr_node.phpt
  it("Test: setAttributeNode()", function () {
    expect(parser.parseCode("<?php\n$xml = <<<HERE\n<?xml version=\"1.0\" ?>\n<root a=\"b\" />\nHERE;\n$xml2 = <<<HERE\n<?xml version=\"1.0\" ?>\n<doc2 />\nHERE;\n$dom = new DOMDocument();\n$dom->loadXML($xml);\n$root = $dom->documentElement;\n$attr = $root->getAttributeNode('a');\n$dom2 = new DOMDocument();\n$dom2->loadXML($xml2);\n$root2 = $dom2->documentElement;\ntry {\n    $root2->setAttributeNode($attr);\n} catch (domexception $e) {\nob_start();\n    var_dump($e);\n    $contents = ob_get_contents();\n    ob_end_clean();\n    echo preg_replace('/object\\(DOMAttr\\).+\\{.*?\\}/s', 'DOMAttr', $contents);\n}\n?>")).toMatchSnapshot();
  });
});
