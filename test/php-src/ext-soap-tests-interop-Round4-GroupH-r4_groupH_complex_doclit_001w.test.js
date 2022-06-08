// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/interop/Round4/GroupH/r4_groupH_complex_doclit_001w.phpt
  it("SOAP Interop Round4 GroupH Complex Doc Lit 001 (php/wsdl): echoSOAPStructFault", function () {
    expect(parser.parseCode("<?php\nclass SOAPStruct {\n    function __construct($s, $i, $f) {\n        $this->varString = $s;\n        $this->varInt = $i;\n        $this->varFloat = $f;\n    }\n}\n$struct = new SOAPStruct('arg',34,325.325);\n$client = new SoapClient(__DIR__.\"/round4_groupH_complex_doclit.wsdl\",array(\"trace\"=>1,\"exceptions\"=>0));\n$client->echoSOAPStructFault($struct);\necho $client->__getlastrequest();\n$HTTP_RAW_POST_DATA = $client->__getlastrequest();\ninclude(\"round4_groupH_complex_doclit.inc\");\necho \"ok\\n\";\n?>")).toMatchSnapshot();
  });
});
