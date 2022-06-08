// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/soap12/T35.phpt
  it("SOAP 1.2: T35 unknownHdr", function () {
    expect(parser.parseCode("<?php\n$HTTP_RAW_POST_DATA = <<<EOF\n<?xml version='1.0' ?>\n<env:Envelope xmlns:env=\"http://www.w3.org/2003/05/soap-envelope\">\n  <env:Header>\n    <test:Unknown xmlns:test=\"http://example.org/ts-tests\"\n          env:mustUnderstand=\"1\">\n      foo\n    </test:Unknown>\n  </env:Header>\n  <env:Body>\n  </env:Body>\n</env:Envelope>\nEOF;\ninclude \"soap12-test.inc\";\n?>")).toMatchSnapshot();
  });
});
