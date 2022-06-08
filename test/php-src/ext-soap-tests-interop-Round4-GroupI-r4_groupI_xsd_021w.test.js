// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/interop/Round4/GroupI/r4_groupI_xsd_021w.phpt
  it("SOAP Interop Round4 GroupI XSD 021 (php/wsdl): echoSimpleTypesAsComplexType", function () {
    expect(parser.parseCode("<?php\n$client = new SoapClient(__DIR__.\"/round4_groupI_xsd.wsdl\",array(\"trace\"=>1,\"exceptions\"=>0));\n$client->echoSimpleTypesAsComplexType(array(\"inputInteger\"=>34,\n                                            \"inputFloat\"=>12.345,\n                                            \"inputString\"=>\"arg\"));\necho $client->__getlastrequest();\n$HTTP_RAW_POST_DATA = $client->__getlastrequest();\ninclude(\"round4_groupI_xsd.inc\");\necho \"ok\\n\";\n?>")).toMatchSnapshot();
  });
});
