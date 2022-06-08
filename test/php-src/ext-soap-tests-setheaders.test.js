// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/setheaders.phpt
  it("SOAP: SoapClient::__setHeaders", function () {
    expect(parser.parseCode("<?php\n$client = new SoapClient(NULL, array(\"location\"=>\"test://\",\"uri\"=>\"test://\",\n  \"exceptions\"=>0,\"trace\"=>1));\n$client->test();\necho $client->__getLastRequest();\n$client->__setSoapHeaders(new SoapHeader(\"test://\",\"HDR1\"));\n$client->test();\necho $client->__getLastRequest();\n$client->test();\necho $client->__getLastRequest();\n$client->__setSoapHeaders();\n$client->test();\necho $client->__getLastRequest();\n$client->__setSoapHeaders(array(new SoapHeader(\"test://\",\"HDR1\"),new SoapHeader(\"test://\",\"HDR2\")));\n$client->test();\necho $client->__getLastRequest();\n$h = array(new SoapHeader(\"test://\",\"HDR0\"));\n$client->__soapCall(\"test\", array(), null, $h);\necho $client->__getLastRequest();\n?>")).toMatchSnapshot();
  });
});
