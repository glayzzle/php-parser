// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/soap12/T38_2.phpt
  it("SOAP 1.2: T38.2 doubleHdr", function () {
    expect(parser.parseCode("<?php\n$HTTP_RAW_POST_DATA = <<<EOF\n<?xml version='1.0' ?>\n<env:Envelope xmlns:env=\"http://www.w3.org/2003/05/soap-envelope\">\n  <env:Header>\n    <test:echoOk xmlns:test=\"http://example.org/ts-tests\"\n          env:mustUnderstand=\"true\"\n          env:role=\"http://example.org/ts-tests/C\">foo</test:echoOk>\n    <test:echoOk xmlns:test=\"http://example.org/ts-tests\"\n          env:mustUnderstand=\"1\"\n          env:role=\"http://example.org/ts-tests/C\">bar</test:echoOk>\n  </env:Header>\n  <env:Body>\n  </env:Body>\n</env:Envelope>\nEOF;\ninclude \"soap12-test.inc\";\n?>")).toMatchSnapshot();
  });
});
