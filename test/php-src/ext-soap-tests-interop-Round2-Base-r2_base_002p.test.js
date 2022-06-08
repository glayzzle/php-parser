// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/interop/Round2/Base/r2_base_002p.phpt
  it("SOAP Interop Round2 base 002 (php/direct): echoString(empty)", function () {
    expect(parser.parseCode("<?php\n$client = new SoapClient(NULL,array(\"location\"=>\"test://\",\"uri\"=>\"http://soapinterop.org/\",\"trace\"=>1,\"exceptions\"=>0));\n$client->__soapCall(\"echoString\", array(\"\"), array(\"soapaction\"=>\"http://soapinterop.org/\",\"uri\"=>\"http://soapinterop.org/\"));\necho $client->__getlastrequest();\n$HTTP_RAW_POST_DATA = $client->__getlastrequest();\ninclude(\"round2_base.inc\");\necho \"ok\\n\";\n?>")).toMatchSnapshot();
  });
});
