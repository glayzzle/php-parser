// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/interop/Round2/Base/r2_base_008w.phpt
  it("SOAP Interop Round2 base 008 (php/wsdl): echoStringArray(empty)", function () {
    expect(parser.parseCode("<?php\n$client = new SoapClient(__DIR__.\"/round2_base.wsdl\",array(\"trace\"=>1,\"exceptions\"=>0));\n$client->echoStringArray(array());\necho $client->__getlastrequest();\n$HTTP_RAW_POST_DATA = $client->__getlastrequest();\ninclude(\"round2_base.inc\");\necho \"ok\\n\";\n?>")).toMatchSnapshot();
  });
});
