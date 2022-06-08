// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/interop/Round4/GroupI/r4_groupI_xsd_007w.phpt
  it("SOAP Interop Round4 GroupI XSD 007 (php/wsdl): echoDate", function () {
    expect(parser.parseCode("<?php\n$client = new SoapClient(__DIR__.\"/round4_groupI_xsd.wsdl\",array(\"trace\"=>1,\"exceptions\"=>0));\n$client->echoDate(array(\"inputDate\"=>\"2002-12-22T21:41:17Z\"));\necho $client->__getlastrequest();\n$HTTP_RAW_POST_DATA = $client->__getlastrequest();\ninclude(\"round4_groupI_xsd.inc\");\necho \"ok\\n\";\n?>")).toMatchSnapshot();
  });
});
