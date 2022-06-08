// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/soap12/T54.phpt
  it("SOAP 1.2: T54 echoDecimal", function () {
    expect(parser.parseCode("<?php\n$HTTP_RAW_POST_DATA = <<<EOF\n<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<env:Envelope xmlns:env=\"http://www.w3.org/2003/05/soap-envelope\"\n              xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\"\n              xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\">\n  <env:Body>\n    <test:echoDecimal xmlns:test=\"http://example.org/ts-tests\"\n          env:encodingStyle=\"http://www.w3.org/2003/05/soap-encoding\">\n      <inputDecimal xsi:type=\"xsd:decimal\">123.45678901234567890</inputDecimal>\n    </test:echoDecimal>\n  </env:Body>\n</env:Envelope>\nEOF;\ninclude \"soap12-test.inc\";\n?>")).toMatchSnapshot();
  });
});
