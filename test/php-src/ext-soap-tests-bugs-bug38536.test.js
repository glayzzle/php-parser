// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/bugs/bug38536.phpt
  it("Bug #38536 (SOAP returns an array of values instead of an object)", function () {
    expect(parser.parseCode("<?php\nclass LocalSoapClient extends SoapClient {\n  function __doRequest($request, $location, $action, $version, $one_way = 0): ?string {\n    return <<<EOF\n<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<SOAP-ENV:Envelope\n  SOAP-ENV:encodingStyle=\"http://schemas.xmlsoap.org/soap/encoding/\"\n  xmlns:SOAP-ENC=\"http://schemas.xmlsoap.org/soap/encoding/\"\n  xmlns:SOAP-ENV=\"http://schemas.xmlsoap.org/soap/envelope/\"\n  xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\"\n  xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"\n  xmlns:ns1=\"http://www.grupos.com.br/ws/enturma/client\">\n<SOAP-ENV:Body>\n<getClientInfoFromDomainResponse SOAP-ENC:root=\"1\">\n  <xsd:Result xsi:type=\"ns1:ClientType\">\n    <id xsi:type=\"xsd:int\">2</id>\n    <address href=\"#i2\"/>\n  </xsd:Result>\n</getClientInfoFromDomainResponse>\n<xsd:address id=\"i2\" xsi:type=\"ns1:ClientAddressType\" SOAP-ENC:root=\"0\">\n  <idClient xsi:type=\"xsd:long\">2</idClient>\n  <address href=\"#i3\"/>\n</xsd:address>\n<address xsi:type=\"xsd:string\" id=\"i3\" SOAP-ENC:root=\"0\">Test</address>\n</SOAP-ENV:Body>\n</SOAP-ENV:Envelope>\nEOF;\n  }\n}\nini_set(\"soap.wsdl_cache_enabled\", 0);\n$SOAPObject = new LocalSoapClient(__DIR__.'/bug38536.wsdl');\nprint_r($SOAPObject->test());\n?>")).toMatchSnapshot();
  });
});
