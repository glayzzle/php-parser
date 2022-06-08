// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/server022.phpt
  it("SOAP Server 22: user fault (through throw of subclass)", function () {
    expect(parser.parseCode("<?php\nclass MyFault extends SoapFault {\n    function __construct() {\n        parent::__construct(\"MyFault\",\"My fault string\");\n    }\n}\nfunction test() {\n    throw new MyFault;\n}\n$server = new soapserver(null,array('uri'=>\"http://testuri.org\"));\n$server->addfunction(\"test\");\n$HTTP_RAW_POST_DATA = <<<EOF\n<?xml version=\"1.0\" encoding=\"ISO-8859-1\"?>\n<SOAP-ENV:Envelope\n  SOAP-ENV:encodingStyle=\"http://schemas.xmlsoap.org/soap/encoding/\"\n  xmlns:SOAP-ENV=\"http://schemas.xmlsoap.org/soap/envelope/\"\n  xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\"\n  xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"\n  xmlns:si=\"http://soapinterop.org/xsd\">\n  <SOAP-ENV:Body>\n    <ns1:test xmlns:ns1=\"http://testuri.org\"/>\n  </SOAP-ENV:Body>\n</SOAP-ENV:Envelope>\nEOF;\n$server->handle($HTTP_RAW_POST_DATA);\necho \"ok\\n\";\n?>")).toMatchSnapshot();
  });
});
