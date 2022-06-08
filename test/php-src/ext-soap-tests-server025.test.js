// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/server025.phpt
  it("SOAP Server 25: One-way SOAP headers encoding using WSDL", function () {
    expect(parser.parseCode("<?php\nclass TestHeader1 extends SoapHeader {\n    function __construct($data) {\n        parent::__construct(\"http://testuri.org\", \"Test1\", $data);\n    }\n}\nclass TestHeader2 extends SoapHeader {\n    function __construct($data) {\n        parent::__construct(\"http://testuri.org\", \"Test2\", $data);\n    }\n}\nfunction test() {\n    global $server;\n    $server->addSoapHeader(new TestHeader1(\"Hello Header!\"));\n    $server->addSoapHeader(new TestHeader2(\"Hello Header!\"));\n    return \"Hello Body!\";\n}\n$server = new soapserver(__DIR__.\"/server025.wsdl\");\n$server->addfunction(\"test\");\n$HTTP_RAW_POST_DATA = <<<EOF\n<?xml version=\"1.0\" encoding=\"ISO-8859-1\"?>\n<SOAP-ENV:Envelope\n  SOAP-ENV:encodingStyle=\"http://schemas.xmlsoap.org/soap/encoding/\"\n  xmlns:SOAP-ENV=\"http://schemas.xmlsoap.org/soap/envelope/\">\n  <SOAP-ENV:Body>\n    <ns1:test xmlns:ns1=\"http://testuri.org\"/>\n  </SOAP-ENV:Body>\n</SOAP-ENV:Envelope>\nEOF;\n$server->handle($HTTP_RAW_POST_DATA);\necho \"ok\\n\";\n?>")).toMatchSnapshot();
  });
});
