// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/soap12/T30.phpt
  it("SOAP 1.2: T30 echoOk", function () {
    expect(parser.parseCode("<?php\n$HTTP_RAW_POST_DATA = <<<EOF\n<?xml version='1.0' ?>\n<env:Envelope xmlns:env=\"http://schemas.xmlsoap.org/soap/envelope/\">\n  <env:Body>\n    <test:echoOk xmlns:test=\"http://example.org/ts-tests\">foo</test:echoOk>\n  </env:Body>\n</env:Envelope>\nEOF;\ninclude \"soap12-test.inc\";\n?>")).toMatchSnapshot();
  });
});
