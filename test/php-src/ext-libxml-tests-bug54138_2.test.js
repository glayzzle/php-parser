// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/libxml/tests/bug54138_2.phpt
  it("Bug #54138 - DOMNode::getLineNo() doesn't return line number higher than 65535", function () {
    expect(parser.parseCode("<?php\ndefine('LIBXML_BIGLINES', 1<<22);\n$foos = str_repeat('<foo/>' . PHP_EOL, 65535);\n$xml = <<<XML\n<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<root>\n$foos\n<bar/>\n</root>\nXML;\n$dom = new DOMDocument();\n$dom->loadXML($xml, LIBXML_BIGLINES);\nvar_dump($dom->getElementsByTagName('bar')->item(0)->getLineNo());\n?>")).toMatchSnapshot();
  });
});
