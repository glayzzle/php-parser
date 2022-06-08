// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/bugs/bug30175.phpt
  it("Bug #30175 (SOAP results aren't parsed correctly)", function () {
    expect(parser.parseCode("<?php\nclass LocalSoapClient extends SoapClient {\n  function __doRequest($request, $location, $action, $version, $one_way = 0): ?string {\n    return <<<EOF\n<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<SOAP-ENV:Envelope\nxmlns:SOAP-ENV=\"http://schemas.xmlsoap.org/soap/envelope/\"\nxmlns:SOAP-ENC=\"http://schemas.xmlsoap.org/soap/encoding/\"\nxmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"\nxmlns:xsd=\"http://www.w3.org/2001/XMLSchema\"\nxmlns:ns1=\"urn:qweb\">\n<SOAP-ENV:Body\nSOAP-ENV:encodingStyle=\"http://schemas.xmlsoap.org/soap/encoding/\"\nid=\"_0\">\n<ns1:HostInfo xsi:type=\"ns1:HostInfo\">\n<name xsi:type=\"xsd:string\">blah blah some name field</name>\n<shortDescription xsi:type=\"xsd:string\">This is a description. more blah blah blah</shortDescription>\n<ipAddress xsi:type=\"xsd:string\">127.0.0.1</ipAddress>\n</ns1:HostInfo>\n</SOAP-ENV:Body>\n</SOAP-ENV:Envelope>\nEOF;\n  }\n}\n$client = new LocalSoapClient(__DIR__.\"/bug30175.wsdl\");\nvar_dump($client->qwebGetHostInfo());\n?>")).toMatchSnapshot();
  });
});
