// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/interop/Round4/GroupI/r4_groupI_xsd_035w.phpt
  it("SOAP Interop Round4 GroupI XSD 035 (php/wsdl): echoVoidSoapHeader(6)", function () {
    expect(parser.parseCode("<?php\n$hdr = new SoapHeader(\"http://soapinterop.org/\",\"echoMeComplexTypeRequest\", array(\"varInt\"=>34,\"varString\"=>\"arg\",\"varFloat\"=>12.345), 1, SOAP_ACTOR_NEXT);\n$client = new SoapClient(__DIR__.\"/round4_groupI_xsd.wsdl\",array(\"trace\"=>1,\"exceptions\"=>0));\n$client->__soapCall(\"echoVoidSoapHeader\",array(),null,$hdr);\necho $client->__getlastrequest();\n$HTTP_RAW_POST_DATA = $client->__getlastrequest();\ninclude(\"round4_groupI_xsd.inc\");\necho \"ok\\n\";\n?>")).toMatchSnapshot();
  });
});
