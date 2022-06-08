// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/server002.phpt
  it("SOAP Server 2: function with parameters and result", function () {
    expect(parser.parseCode("<?php\nfunction Add($x,$y) {\n  return $x+$y;\n}\n$server = new soapserver(null,array('uri'=>\"http://testuri.org\"));\n$server->addfunction(\"Add\");\n$HTTP_RAW_POST_DATA = <<<EOF\n<?xml version=\"1.0\" encoding=\"ISO-8859-1\"?>\n<SOAP-ENV:Envelope\n  SOAP-ENV:encodingStyle=\"http://schemas.xmlsoap.org/soap/encoding/\"\n  xmlns:SOAP-ENV=\"http://schemas.xmlsoap.org/soap/envelope/\"\n  xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\"\n  xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"\n  xmlns:si=\"http://soapinterop.org/xsd\">\n  <SOAP-ENV:Body>\n    <ns1:Add xmlns:ns1=\"http://testuri.org\">\n      <x xsi:type=\"xsd:int\">22</x>\n      <y xsi:type=\"xsd:int\">33</y>\n    </ns1:Add>\n  </SOAP-ENV:Body>\n</SOAP-ENV:Envelope>\nEOF;\n$server->handle($HTTP_RAW_POST_DATA);\necho \"ok\\n\";\n?>")).toMatchSnapshot();
  });
});
