// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/soap12/T59.phpt
  it("SOAP 1.2: T59 echoStringArray", function () {
    expect(parser.parseCode("<?php\n$HTTP_RAW_POST_DATA = <<<EOF\n<?xml version=\"1.0\"?>\n<env:Envelope xmlns:env=\"http://www.w3.org/2003/05/soap-envelope\"\n              xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\"\n              xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\">\n  <env:Body>\n    <test:echoStringArray xmlns:test=\"http://example.org/ts-tests\"\n          env:encodingStyle=\"http://www.w3.org/2003/05/soap-encoding\">\n      <inputStringArray enc:itemType=\"xsd:string\"\n                        xmlns:enc=\"http://www.w3.org/2003/05/soap-encoding\">\n        <item enc:id=\"data\" xsi:type=\"xsd:string\" enc:ref=\"#data\">hello</item>\n        <item>world</item>\n      </inputStringArray>\n    </test:echoStringArray>\n  </env:Body>\n</env:Envelope>\nEOF;\ninclude \"soap12-test.inc\";\n?>")).toMatchSnapshot();
  });
});
