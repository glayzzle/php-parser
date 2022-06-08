// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/interop/Round4/GroupH/r4_groupH_soapfault_001w.phpt
  it("SOAP Interop Round4 GroupH SoapFault 001 (php/wsdl): echoVersionMismatchFault(SOAP 1.1)", function () {
    expect(parser.parseCode("<?php\n$client = new SoapClient(__DIR__.\"/round4_groupH_soapfault.wsdl\",array(\"trace\"=>1,\"exceptions\"=>0));\n$client->echoVersionMismatchFault();\necho $client->__getlastrequest();\n$HTTP_RAW_POST_DATA = $client->__getlastrequest();\ninclude(\"round4_groupH_soapfault.inc\");\necho \"ok\\n\";\n?>")).toMatchSnapshot();
  });
});
