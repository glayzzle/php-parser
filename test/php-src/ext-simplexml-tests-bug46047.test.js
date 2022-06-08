// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/simplexml/tests/bug46047.phpt
  it("Bug #46047 (SimpleXML converts empty nodes into object with nested array)", function () {
    expect(parser.parseCode("<?php\n$xml = new SimpleXMLElement('<foo><bar><![CDATA[]]></bar><baz/></foo>',\n  LIBXML_NOCDATA);\nprint_r($xml);\n$xml = new SimpleXMLElement('<foo><bar></bar><baz/></foo>');\nprint_r($xml);\n$xml = new SimpleXMLElement('<foo><bar/><baz/></foo>');\nprint_r($xml);\n?>")).toMatchSnapshot();
  });
});
