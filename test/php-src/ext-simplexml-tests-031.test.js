// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/simplexml/tests/031.phpt
  it("SimpleXML: addChild and addAttribute", function () {
    expect(parser.parseCode("<?php\n$xml =<<<EOF\n<root s:att1=\"b\" att1=\"a\"\n      xmlns:s=\"urn::test\" xmlns:t=\"urn::test-t\">\n   <child1>test</child1>\n   <child1>test 2</child1>\n   <s:child3 />\n</root>\nEOF;\n$sxe = simplexml_load_string($xml);\n/* Add new attribute in a new namespace */\n$sxe->addAttribute('v:att11', 'xxx', 'urn::test-v');\n/* Try to add attribute again -> display warning as method is for new Attr only */\n$sxe->addAttribute('v:att11', 'xxx', 'urn::test-v');\n/* Add new attribute w/o namespace */\n$sxe->addAttribute('att2', 'no-ns');\n$d = $sxe->attributes();\n/* Try to add element to attribute -> display warning and do not add */\n$d->addChild('m:test', 'myval', 'urn::test');\n/* Test adding elements in various configurations */\n$sxe->addChild('m:test1', 'myval', 'urn::test');\n/* New namespace test */\n$n = $sxe->addChild('m:test2', 'myval', 'urn::testnew');\n$sxe->addChild('test3', 'myval', 'urn::testnew');\n$sxe->addChild('test4', 'myval');\n/* Does not add prefix here although name is valid (but discouraged) - change behavior? */\n$sxe->addChild('s:test5', 'myval');\necho $sxe->asXML();\n?>")).toMatchSnapshot();
  });
});
