// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/interop/Round4/GroupH/r4_groupH_simple_doclit_002w.phpt
  it("SOAP Interop Round4 GroupH Simple Doc Lit 002 (php/wsdl): echoStringFault", function () {
    expect(parser.parseCode("<?php\n$client = new SoapClient(__DIR__.\"/round4_groupH_simple_doclit.wsdl\",array(\"trace\"=>1,\"exceptions\"=>0));\n$client->echoStringFault(\"Hello World\");\necho $client->__getlastrequest();\n$HTTP_RAW_POST_DATA = $client->__getlastrequest();\ninclude(\"round4_groupH_simple_doclit.inc\");\necho \"ok\\n\";\n?>")).toMatchSnapshot();
  });
});
