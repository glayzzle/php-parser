// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/soap12/T45.phpt
  it("SOAP 1.2: T45 echoNestedStruct", function () {
    expect(parser.parseCode("<?php\n$HTTP_RAW_POST_DATA = <<<EOF\n<?xml version=\"1.0\"?>\n<env:Envelope xmlns:env=\"http://www.w3.org/2003/05/soap-envelope\"\n              xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\"\n              xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\">\n  <env:Body>\n    <test:echoNestedStruct xmlns:test=\"http://example.org/ts-tests\"\n       env:encodingStyle=\"http://www.w3.org/2003/05/soap-encoding\">\n      <inputStruct xsi:type=\"ns1:SOAPStructStruct\"\n                   xmlns:ns1=\"http://example.org/ts-tests/xsd\">\n        <varInt xsi:type=\"xsd:int\">42</varInt>\n        <varFloat xsi:type=\"xsd:float\">0.005</varFloat>\n        <varString xsi:type=\"xsd:string\">hello world</varString>\n        <varStruct xsi:type=\"ns1:SOAPStruct\">\n          <varInt xsi:type=\"xsd:int\">99</varInt>\n          <varFloat xsi:type=\"xsd:float\">5.5</varFloat>\n          <varString xsi:type=\"xsd:string\">nested struct</varString>\n        </varStruct>\n      </inputStruct>\n    </test:echoNestedStruct>\n  </env:Body>\n</env:Envelope>\nEOF;\ninclude \"soap12-test.inc\";\n?>")).toMatchSnapshot();
  });
});
