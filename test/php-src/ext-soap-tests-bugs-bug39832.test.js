// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/bugs/bug39832.phpt
  it("Bug #39832 (SOAP Server: parameter not matching the WSDL specified type are set to 0)", function () {
    expect(parser.parseCode("<?php\n$HTTP_RAW_POST_DATA = <<<EOF\n<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<SOAP-ENV:Envelope xmlns:SOAP-ENV=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns:ns1=\"http://test.pl\"><SOAP-ENV:Body>\n<SOAP-ENV:Test>\n<parameters priority=\"high\">\n<ns1:NetworkErrorCode>1</ns1:NetworkErrorCode>\n</parameters>\n</SOAP-ENV:Test></SOAP-ENV:Body></SOAP-ENV:Envelope>\nEOF;\nfunction Test($x) {\n  return $x->priority;\n}\n$x = new SoapServer(__DIR__.\"/bug39832.wsdl\");\n$x->addFunction(\"Test\");\n$x->handle($HTTP_RAW_POST_DATA);\n?>")).toMatchSnapshot();
  });
});
