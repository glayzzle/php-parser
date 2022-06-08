// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/soap12/T61.phpt
  it("SOAP 1.2: T61 countItems", function () {
    expect(parser.parseCode("<?php\n$HTTP_RAW_POST_DATA = <<<EOF\n<?xml version='1.0' ?>\n<env:Envelope xmlns:env=\"http://www.w3.org/2003/05/soap-envelope\"\n              xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\"\n              xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\">\n  <env:Body>\n    <test:countItems xmlns:test=\"http://example.org/ts-tests\"\n          xmlns:enc=\"http://www.w3.org/2003/05/soap-encoding\"\n          env:encodingStyle=\"http://www.w3.org/2003/05/soap-encoding\">\n      <inputStringArray enc:itemType=\"xsd:string\" enc:arraySize=\"2 *\">\n        <item xsi:type=\"xsd:string\">hello</item>\n        <item xsi:type=\"xsd:string\">world</item>\n      </inputStringArray>\n    </test:countItems>\n  </env:Body>\n</env:Envelope>\nEOF;\ninclude \"soap12-test.inc\";\n?>")).toMatchSnapshot();
  });
});
