// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/interop/Round3/GroupD/r3_groupD_doclitparams_002w.phpt
  it("SOAP Interop Round3 GroupD Doc Lit Parameters 002 (php/wsdl): echoStringArray", function () {
    expect(parser.parseCode("<?php\n$client = new SoapClient(__DIR__.\"/round3_groupD_doclitparams.wsdl\",array(\"trace\"=>1,\"exceptions\"=>0));\n$client->echoStringArray(array(\"param0\"=>array(\"one\",\"two\",\"three\")));\necho $client->__getlastrequest();\n$HTTP_RAW_POST_DATA = $client->__getlastrequest();\ninclude(\"round3_groupD_doclitparams.inc\");\necho \"ok\\n\";\n?>")).toMatchSnapshot();
  });
});
