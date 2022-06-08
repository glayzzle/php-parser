// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/bugs/bug36629.phpt
  it("Bug #36629 (SoapServer::handle() exits on SOAP faults)", function () {
    expect(parser.parseCode("<?php\nfunction test1() {\n  throw new SoapFault(\"Server\", \"test1\");\n}\nfunction test2() {\n  return new SoapFault(\"Server\", \"test2\");\n}\n$server = new soapserver(null,array('uri'=>\"http://testuri.org\"));\n$server->addfunction(array(\"test1\",\"test2\"));\n$HTTP_RAW_POST_DATA = <<<EOF\n<?xml version=\"1.0\" encoding=\"ISO-8859-1\"?>\n<SOAP-ENV:Envelope\n  SOAP-ENV:encodingStyle=\"http://schemas.xmlsoap.org/soap/encoding/\"\n  xmlns:SOAP-ENV=\"http://schemas.xmlsoap.org/soap/envelope/\"\n  xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\"\n  xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"\n  xmlns:si=\"http://soapinterop.org/xsd\">\n  <SOAP-ENV:Body>\n    <ns1:test1 xmlns:ns1=\"http://testuri.org\" />\n  </SOAP-ENV:Body>\n</SOAP-ENV:Envelope>\nEOF;\n$server->handle($HTTP_RAW_POST_DATA);\n$HTTP_RAW_POST_DATA = <<<EOF\n<?xml version=\"1.0\" encoding=\"ISO-8859-1\"?>\n<SOAP-ENV:Envelope\n  SOAP-ENV:encodingStyle=\"http://schemas.xmlsoap.org/soap/encoding/\"\n  xmlns:SOAP-ENV=\"http://schemas.xmlsoap.org/soap/envelope/\"\n  xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\"\n  xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"\n  xmlns:si=\"http://soapinterop.org/xsd\">\n  <SOAP-ENV:Body>\n    <ns1:test2 xmlns:ns1=\"http://testuri.org\" />\n  </SOAP-ENV:Body>\n</SOAP-ENV:Envelope>\nEOF;\n$server->handle($HTTP_RAW_POST_DATA);\necho \"ok\\n\";\n?>")).toMatchSnapshot();
  });
});
