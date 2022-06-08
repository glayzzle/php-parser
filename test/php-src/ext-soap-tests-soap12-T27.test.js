// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/soap12/T27.phpt
  it("SOAP 1.2: T27 echoStringArray", function () {
    expect(parser.parseCode("<?php\n$HTTP_RAW_POST_DATA = <<<EOF\n<?xml version='1.0' ?>\n<env:Envelope xmlns:env=\"http://www.w3.org/2003/05/soap-envelope\"\n              xmlns:xs=\"http://www.w3.org/2001/XMLSchema\">\n  <env:Body>\n    <test:echoStringArray xmlns:test=\"http://example.org/ts-tests\"\n          xmlns:enc=\"http://www.w3.org/2003/05/soap-encoding\"\n          env:encodingStyle=\"http://www.w3.org/2003/05/soap-encoding\">\n      <test:array enc:itemType=\"xs:string\" enc:arraySize=\"1\">\n        <a>\n          <b>1</b>\n        </a>\n      </test:array>\n    </test:echoStringArray>\n </env:Body>\n</env:Envelope>\nEOF;\ninclude \"soap12-test.inc\";\n?>")).toMatchSnapshot();
  });
});
