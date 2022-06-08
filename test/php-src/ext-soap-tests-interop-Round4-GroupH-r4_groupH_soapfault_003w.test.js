// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/interop/Round4/GroupH/r4_groupH_soapfault_003w.phpt
  it("SOAP Interop Round4 GroupH SoapFault 003 (php/wsdl): echoVersionMismatchFault(unknown version)", function () {
    expect(parser.parseCode("<?php\n$HTTP_RAW_POST_DATA = <<<EOF\n<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<SOAP-ENV:Envelope xmlns:SOAP-ENV=\"http://unknown.org/envelope/\" xmlns:ns1=\"http://soapinterop.org/wsdl\" xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns:SOAP-ENC=\"http://schemas.xmlsoap.org/soap/encoding/\" SOAP-ENV:encodingStyle=\"http://schemas.xmlsoap.org/soap/encoding/\"><SOAP-ENV:Body><ns1:echoVersionMismatchFault/></SOAP-ENV:Body></SOAP-ENV:Envelope>\nEOF;\necho $HTTP_RAW_POST_DATA.\"\\n\";\ninclude(\"round4_groupH_soapfault.inc\");\necho \"ok\\n\";\n?>")).toMatchSnapshot();
  });
});
