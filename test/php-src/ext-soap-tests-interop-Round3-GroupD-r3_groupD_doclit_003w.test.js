// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/interop/Round3/GroupD/r3_groupD_doclit_003w.phpt
  it("SOAP Interop Round3 GroupD Doc Lit 003 (php/wsdl): echoStruct", function () {
    expect(parser.parseCode("<?php\nclass SOAPStruct {\n    function __construct($s, $i, $f) {\n        $this->varString = $s;\n        $this->varInt = $i;\n        $this->varFloat = $f;\n    }\n}\n$struct = new SOAPStruct('arg',34,325.325);\n$client = new SoapClient(__DIR__.\"/round3_groupD_doclit.wsdl\",array(\"trace\"=>1,\"exceptions\"=>0));\n$client->echoStruct($struct);\necho $client->__getlastrequest();\n$HTTP_RAW_POST_DATA = $client->__getlastrequest();\ninclude(\"round3_groupD_doclit.inc\");\necho \"ok\\n\";\n?>")).toMatchSnapshot();
  });
});
