// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/bug68996.phpt
  it("Bug #68996 (Invalid free of CG(interned_empty_string))", function () {
    expect(parser.parseCode("<?php\n$s = new SoapServer(NULL, [\n    'uri' => 'http://foo',\n]);\nfunction foo() {\n  return new SoapFault(\"\\xfc\\x63\", \"some msg\");\n}\n$s->addFunction(\"foo\");\n// soap 1.1\n$HTTP_RAW_POST_DATA = <<<EOF\n<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<SOAP-ENV:Envelope xmlns:SOAP-ENV=\"http://schemas.xmlsoap.org/soap/envelope/\">\n  <SOAP-ENV:Body>\n    <SOAP-ENV:foo />\n  </SOAP-ENV:Body>\n</SOAP-ENV:Envelope>\nEOF;\n$s->handle($HTTP_RAW_POST_DATA);\n// soap 1.2\n$HTTP_RAW_POST_DATA = <<<EOF\n<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<env:Envelope xmlns:env=\"http://www.w3.org/2003/05/soap-envelope\">\n  <env:Body>\n    <env:foo />\n  </env:Body>\n</env:Envelope>\nEOF;\n$s->handle($HTTP_RAW_POST_DATA);\n?>")).toMatchSnapshot();
  });
});
