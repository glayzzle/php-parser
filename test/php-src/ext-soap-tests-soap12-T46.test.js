// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/soap12/T46.phpt
  it("SOAP 1.2: T46 echoNestedArray", function () {
    expect(parser.parseCode("<?php\n$HTTP_RAW_POST_DATA = <<<EOF\n<?xml version=\"1.0\"?>\n<env:Envelope xmlns:env=\"http://www.w3.org/2003/05/soap-envelope\"\n              xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\"\n              xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\">\n  <env:Body>\n    <test:echoNestedArray xmlns:test=\"http://example.org/ts-tests\"\n          env:encodingStyle=\"http://www.w3.org/2003/05/soap-encoding\">\n      <inputStruct xsi:type=\"ns1:SOAPArrayStruct\"\n                   xmlns:ns1=\"http://example.org/ts-tests/xsd\">\n        <varInt xsi:type=\"xsd:int\">42</varInt>\n        <varFloat xsi:type=\"xsd:float\">0.005</varFloat>\n        <varString xsi:type=\"xsd:string\">hello world</varString>\n        <varArray enc:itemType=\"xsd:string\" enc:arraySize=\"3\"\n                  xmlns:enc=\"http://www.w3.org/2003/05/soap-encoding\">\n          <item xsi:type=\"xsd:string\">red</item>\n          <item xsi:type=\"xsd:string\">blue</item>\n          <item xsi:type=\"xsd:string\">green</item>\n        </varArray>\n      </inputStruct>\n    </test:echoNestedArray>\n  </env:Body>\n</env:Envelope>\nEOF;\ninclude \"soap12-test.inc\";\n?>")).toMatchSnapshot();
  });
});
