// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/soap12/T51.phpt
  it("SOAP 1.2: T51 echoBase64", function () {
    expect(parser.parseCode("<?php\n$HTTP_RAW_POST_DATA = <<<EOF\n<?xml version=\"1.0\"?>\n<env:Envelope xmlns:env=\"http://www.w3.org/2003/05/soap-envelope\"\n              xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"\n              xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\">\n  <env:Body>\n    <test:echoBase64 xmlns:test=\"http://example.org/ts-tests\"\n       env:encodingStyle=\"http://www.w3.org/2003/05/soap-encoding\">\n      <inputBase64 xsi:type=\"xsd:base64Binary\">\n        YUdWc2JHOGdkMjl5YkdRPQ==\n      </inputBase64>\n    </test:echoBase64>\n  </env:Body>\n</env:Envelope>\nEOF;\ninclude \"soap12-test.inc\";\n?>")).toMatchSnapshot();
  });
});
