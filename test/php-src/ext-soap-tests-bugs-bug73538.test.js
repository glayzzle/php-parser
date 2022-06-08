// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/bugs/bug73538.phpt
  it("SOAP: SoapClient::__setHeaders array overrides previous headers", function () {
    expect(parser.parseCode("<?php\n$client = new SoapClient(null, [\n    \"location\"      =>  \"test://\",\n    \"uri\"           =>  \"test://\",\n    \"exceptions\"    =>  false,\n    \"trace\"         =>  true,\n]);\n$client->__setSoapHeaders(new \\SoapHeader('ns', 'Header', ['something' => 1]));\n$client->__setSoapHeaders(new \\SoapHeader('ns', 'Header', ['something' => 2]));\n$client->test();\necho $client->__getLastRequest();\n$client = new SoapClient(null, [\n    \"location\"      =>  \"test://\",\n    \"uri\"           =>  \"test://\",\n    \"exceptions\"    =>  false,\n    \"trace\"         =>  true,\n]);\n$client->__setSoapHeaders([new \\SoapHeader('ns', 'Header', ['something' => 1])]);\n$client->__setSoapHeaders([new \\SoapHeader('ns', 'Header', ['something' => 2])]);\n$client->test();\necho $client->__getLastRequest();\n?>")).toMatchSnapshot();
  });
});
