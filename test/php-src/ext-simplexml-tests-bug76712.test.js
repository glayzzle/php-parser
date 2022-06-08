// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/simplexml/tests/bug76712.phpt
  it("BUg #76712 (Assignment of empty string creates extraneous text node)", function () {
    expect(parser.parseCode("<?php\n$sxe = new SimpleXMLElement('<foo></foo>');\n$sxe->addChild('bar', '');\necho $sxe->asXML();\n$sxe = new SimpleXMLElement('<foo></foo>');\n$sxe->addChild('bar');\n$sxe->bar = '';\necho $sxe->asXML();\n?>")).toMatchSnapshot();
  });
});
