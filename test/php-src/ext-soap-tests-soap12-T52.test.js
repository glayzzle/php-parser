// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/soap12/T52.phpt
  it("SOAP 1.2: T52 echoBoolean", function () {
    expect(parser.parseCode("<?php\n$HTTP_RAW_POST_DATA = <<<EOF\n<?xml version=\"1.0\"?>\n<env:Envelope xmlns:env=\"http://www.w3.org/2003/05/soap-envelope\"\n              xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\"\n              xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\">\n  <env:Body>\n    <test:echoBoolean xmlns:test=\"http://example.org/ts-tests\"\n          env:encodingStyle=\"http://www.w3.org/2003/05/soap-encoding\">\n      <inputBoolean xsi:type=\"xsd:boolean\">1</inputBoolean>\n    </test:echoBoolean>\n  </env:Body>\n</env:Envelope>\nEOF;\ninclude \"soap12-test.inc\";\n?>")).toMatchSnapshot();
  });
});
