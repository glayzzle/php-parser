// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/soap12/T13.phpt
  it("SOAP 1.2: T13 unknownHdr", function () {
    expect(parser.parseCode("<?php\n$HTTP_RAW_POST_DATA = <<<EOF\n<?xml version='1.0' ?>\n<env:Envelope xmlns:env=\"http://www.w3.org/2003/05/soap-envelope\">\n  <env:Header>\n    <test:Unknown xmlns:test=\"http://example.org/ts-tests\"\n          env:role=\"http://www.w3.org/2003/05/soap-envelope/role/ultimateReceiver\"\n          env:mustUnderstand=\"true\">foo</test:Unknown>\n  </env:Header>\n  <env:Body>\n  </env:Body>\n</env:Envelope>\nEOF;\ninclude \"soap12-test.inc\";\n?>")).toMatchSnapshot();
  });
});
