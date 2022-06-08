// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/interop/Round2/GroupB/r2_groupB_003p.phpt
  it("SOAP Interop Round2 groupB 003 (php/direct): echo2DStringArray", function () {
    expect(parser.parseCode("<?php\n$param = array(\n    array('row0col0', 'row0col1', 'row0col2'),\n    array('row1col0', 'row1col1', 'row1col2'));\n$client = new SoapClient(NULL,array(\"location\"=>\"test://\",\"uri\"=>\"http://soapinterop.org/\",\"trace\"=>1,\"exceptions\"=>0));\n$client->__soapCall(\"echo2DStringArray\", array($param), array(\"soapaction\"=>\"http://soapinterop.org/\",\"uri\"=>\"http://soapinterop.org/\"));\necho $client->__getlastrequest();\n$HTTP_RAW_POST_DATA = $client->__getlastrequest();\ninclude(\"round2_groupB.inc\");\necho \"ok\\n\";\n?>")).toMatchSnapshot();
  });
});
