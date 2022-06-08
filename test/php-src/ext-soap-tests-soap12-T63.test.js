// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/soap12/T63.phpt
  it("SOAP 1.2: T63 validateCountryCode", function () {
    expect(parser.parseCode("<?php\n$HTTP_RAW_POST_DATA = <<<EOF\n<?xml version='1.0' ?>\n<env:Envelope xmlns:env=\"http://www.w3.org/2003/05/soap-envelope\">\n  <env:Header>\n    <test:validateCountryCode xmlns:test=\"http://example.org/ts-tests\"\n          env:role=\"http://example.org/ts-tests/C\"\n          env:mustUnderstand=\"1\">ABCD</test:validateCountryCode>\n  </env:Header>\n  <env:Body>\n  </env:Body>\n</env:Envelope>\nEOF;\ninclude \"soap12-test.inc\";\n?>")).toMatchSnapshot();
  });
});
