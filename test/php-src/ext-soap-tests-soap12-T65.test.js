// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/soap12/T65.phpt
  it("SOAP 1.2: T65 echoOk", function () {
    expect(parser.parseCode("<?php\n$HTTP_RAW_POST_DATA = <<<EOF\n<?xml version='1.0' ?>\n<!DOCTYPE DOC [\n<!ELEMENT Envelope (Body) >\n<!ELEMENT Body (echoOk) >\n<!ELEMENT echoOk (#PCDATA) >\n]>\n<env:Envelope xmlns:env=\"http://www.w3.org/2003/05/soap-envelope\">\n  <env:Body>\n    <test:echoOk xmlns:test=\"http://example.org/ts-tests\">\n      foo\n    </test:echoOk>\n  </env:Body>\n</env:Envelope>\nEOF;\ninclude \"soap12-test.inc\";\n?>")).toMatchSnapshot();
  });
});
