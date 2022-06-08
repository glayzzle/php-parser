// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/bug36756.phpt
  it("Bug #36756 (DOMDocument::removeChild corrupts node)", function () {
    expect(parser.parseCode("<?php\n/* Node is preserved from removeChild */\n$dom = new DOMDocument();\n$dom->loadXML('<root><child/></root>');\n$xpath = new DOMXpath($dom);\n$node = $xpath->query('/root')->item(0);\necho $node->nodeName . \"\\n\";\n$dom->removeChild($GLOBALS['dom']->firstChild);\necho \"nodeType: \" . $node->nodeType . \"\\n\";\n/* Node gets destroyed during removeChild */\n$dom->loadXML('<root><child/></root>');\n$xpath = new DOMXpath($dom);\n$node = $xpath->query('//child')->item(0);\necho $node->nodeName . \"\\n\";\n$GLOBALS['dom']->removeChild($GLOBALS['dom']->firstChild);\ntry {\n    echo \"nodeType: \" . $node->nodeType . \"\\n\";\n} catch (\\Error $e) {\n    echo get_class($e) . ': ' . $e->getMessage() .\\PHP_EOL;\n}\n?>")).toMatchSnapshot();
  });
});
