// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/interop/Round4/GroupH/r4_groupH_complex_doclit_004w.phpt
  it("SOAP Interop Round4 GroupH Complex Doc Lit 004 (php/wsdl): echoMultipleFaults1(1)", function () {
    expect(parser.parseCode("<?php\nclass SOAPStruct {\n    function __construct($s, $i, $f) {\n        $this->varString = $s;\n        $this->varInt = $i;\n        $this->varFloat = $f;\n    }\n}\nclass BaseStruct {\n    function __construct($f, $s) {\n        $this->structMessage = $f;\n        $this->shortMessage = $s;\n    }\n}\n$s1 = new SOAPStruct('arg1',34,325.325);\n$s2 = new BaseStruct(new SOAPStruct('arg2',34,325.325),12);\n$client = new SoapClient(__DIR__.\"/round4_groupH_complex_doclit.wsdl\",array(\"trace\"=>1,\"exceptions\"=>0));\n$client->echoMultipleFaults1(array(\"whichFault\" => 1,\n                                   \"param1\"     => $s1,\n                                   \"param2\"     => $s2));\necho $client->__getlastrequest();\n$HTTP_RAW_POST_DATA = $client->__getlastrequest();\ninclude(\"round4_groupH_complex_doclit.inc\");\necho \"ok\\n\";\n?>")).toMatchSnapshot();
  });
});
