// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/interop/Round4/GroupH/r4_groupH_simple_doclit_008w.phpt
  it("SOAP Interop Round4 GroupH Simple Doc Lit 008 (php/wsdl): echoMultipleFaults2(1)", function () {
    expect(parser.parseCode("<?php\n$client = new SoapClient(__DIR__.\"/round4_groupH_simple_doclit.wsdl\",array(\"trace\"=>1,\"exceptions\"=>0));\n$client->echoMultipleFaults2(array(\"whichFault\" => 1,\n                                   \"param1\" => \"Hello world\",\n                                   \"param2\" => 12.345,\n                                   \"param3\" => array(\"one\",\"two\",\"three\")));\necho $client->__getlastrequest();\n$HTTP_RAW_POST_DATA = $client->__getlastrequest();\ninclude(\"round4_groupH_simple_doclit.inc\");\necho \"ok\\n\";\n?>")).toMatchSnapshot();
  });
});
