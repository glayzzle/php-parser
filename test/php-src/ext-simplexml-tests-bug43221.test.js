// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/simplexml/tests/bug43221.phpt
  it("Bug #43221 (SimpleXML adding default namespace in addAttribute)", function () {
    expect(parser.parseCode("<?php\n$xml = simplexml_load_string('<?xml version=\"1.0\" encoding=\"utf-8\"?><root />');\n$n = $xml->addChild(\"node\", \"value\");\n$n->addAttribute(\"a\", \"b\");\n$n->addAttribute(\"c\", \"d\", \"http://bar.com\");\n$n->addAttribute(\"foo:e\", \"f\", \"http://bar.com\");\nprint_r($xml->asXml());\n?>")).toMatchSnapshot();
  });
});
