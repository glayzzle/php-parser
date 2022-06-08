// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/soap12/T56.phpt
  it("SOAP 1.2: T56 echoString", function () {
    expect(parser.parseCode("<?php\n$HTTP_RAW_POST_DATA = <<<EOF\n<?xml version='1.0' ?>\n<env:Envelope xmlns:env=\"http://www.w3.org/2003/05/soap-envelope\"\n              xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\"\n              xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"\n              xmlns:enc=\"http://www.w3.org/2003/05/soap-encoding\">\n  <env:Header>\n    <test:DataHolder xmlns:test=\"http://example.org/ts-tests\"\n          env:encodingStyle=\"http://www.w3.org/2003/05/soap-encoding\">\n      <test:Data enc:id=\"data-1\" xsi:type=\"xsd:string\">\n        hello world\n      </test:Data>\n    </test:DataHolder>\n  </env:Header>\n  <env:Body>\n    <test:echoString xmlns:test=\"http://example.org/ts-tests\"\n          env:encodingStyle=\"http://www.w3.org/2003/05/soap-encoding\">\n      <inputString enc:ref=\"#data-2\" xsi:type=\"xsd:string\" />\n    </test:echoString>\n  </env:Body>\n</env:Envelope>\nEOF;\ninclude \"soap12-test.inc\";\n?>")).toMatchSnapshot();
  });
});
