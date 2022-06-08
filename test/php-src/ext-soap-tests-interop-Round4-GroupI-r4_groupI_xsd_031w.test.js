// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/interop/Round4/GroupI/r4_groupI_xsd_031w.phpt
  it("SOAP Interop Round4 GroupI XSD 031 (php/wsdl): echoVoidSoapHeader(2)", function () {
    expect(parser.parseCode("<?php\n$hdr = new SoapHeader(\"http://soapinterop.org/\",\"echoMeStringRequest\", array(), 1);\n$client = new SoapClient(__DIR__.\"/round4_groupI_xsd.wsdl\",array(\"trace\"=>1,\"exceptions\"=>0));\n$client->__soapCall(\"echoVoidSoapHeader\",array(),null,$hdr);\necho $client->__getlastrequest();\n$HTTP_RAW_POST_DATA = $client->__getlastrequest();\ninclude(\"round4_groupI_xsd.inc\");\necho \"ok\\n\";\n?>")).toMatchSnapshot();
  });
});
