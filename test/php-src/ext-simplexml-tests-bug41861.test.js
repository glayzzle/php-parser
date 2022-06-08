// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/simplexml/tests/bug41861.phpt
  it("Bug #41861 (getNamespaces() returns the namespaces of a node's siblings)", function () {
    expect(parser.parseCode("<?php\n$xml = simplexml_load_string('<root>\n    <first_node_no_ns />\n    <ns1:node1 xmlns:ns1=\"#ns1\" />\n    <ns2:node2 xmlns:ns2=\"#ns2\" />\n    <ns3:node3 xmlns:ns3=\"#ns3\" />\n    <last_node_no_ns />\n</root>');\n$name = $xml->getName();\n$namespaces = $xml->getNamespaces(True);\necho \"root(recursive): '$name' -- namespaces: \", implode(', ', $namespaces), \"\\n\";\n$namespaces = $xml->getNamespaces(False);\necho \"root(non-recursive): '$name' -- namespaces: \", implode(', ', $namespaces), \"\\n\";\nforeach (array(null, '#ns1', '#ns2', '#ns3') as $ns)\n{\n    foreach ($xml->children($ns) as $child)\n    {\n        $name = $child->getName();\n        $namespaces = $child->getNamespaces(false);\n        echo \"children($ns): '$name' -- namespaces: \", implode(', ', $namespaces), \"\\n\";\n    }\n}\n?>")).toMatchSnapshot();
  });
});
