// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/interop/Round2/GroupB/r2_groupB_003w.phpt
  it("SOAP Interop Round2 groupB 003 (php/wsdl): echo2DStringArray", function () {
    expect(parser.parseCode("<?php\n$param = array(\n    array('row0col0', 'row0col1', 'row0col2'),\n    array('row1col0', 'row1col1', 'row1col2'));\n$client = new SoapClient(__DIR__.\"/round2_groupB.wsdl\",array(\"trace\"=>1,\"exceptions\"=>0));\n$client->echo2DStringArray($param);\necho $client->__getlastrequest();\n$HTTP_RAW_POST_DATA = $client->__getlastrequest();\ninclude(\"round2_groupB.inc\");\necho \"ok\\n\";\n?>")).toMatchSnapshot();
  });
});
