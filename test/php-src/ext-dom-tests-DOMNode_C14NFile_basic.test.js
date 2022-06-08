// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/DOMNode_C14NFile_basic.phpt
  it("DOMNode::C14NFile()", function () {
    expect(parser.parseCode("<?php\n$xml = <<< XML\n<?xml version=\"1.0\" ?>\n<books>\n <book>\n  <title>The Grapes of Wrath</title>\n  <author>John Steinbeck</author>\n </book>\n <book>\n  <title>The Pearl</title>\n  <author>John Steinbeck</author>\n </book>\n</books>\nXML;\n$output = __DIR__.'/DOMNode_C14NFile_basic.tmp';\n$doc = new DOMDocument();\n$doc->loadXML($xml);\n$node = $doc->getElementsByTagName('title')->item(0);\nvar_dump($node->C14NFile($output));\n$content = file_get_contents($output);\nvar_dump($content);\ntry {\n    var_dump($node->C14NFile($output, false, false, []));\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\ntry {\n    var_dump($node->C14NFile($output, false, false, ['query' => []]));\n} catch (\\TypeError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\n?>")).toMatchSnapshot();
  });
});
