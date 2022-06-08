// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/bugs/bug31695.phpt
  it("Bug #31695 (Cannot redefine endpoint when using WSDL)", function () {
    expect(parser.parseCode("<?php\nini_set(\"soap.wsdl_cache_enabled\", 0);\nfunction Test($x) {\n    return $x;\n}\nclass LocalSoapClient extends SoapClient {\n  function __construct($wsdl, $options=array()) {\n    parent::__construct($wsdl, $options);\n    $this->server = new SoapServer($wsdl, $options);\n        $this->server->addFunction(\"Test\");\n  }\n  function __doRequest($request, $location, $action, $version, $one_way = 0): ?string {\n    echo \"$location\\n\";\n    ob_start();\n    $this->server->handle($request);\n    $response = ob_get_contents();\n    ob_end_clean();\n    return $response;\n  }\n}\n$client = new LocalSoapClient(__DIR__.\"/bug31695.wsdl\");\n$client->Test(\"str\");\n$client = new LocalSoapClient(__DIR__.\"/bug31695.wsdl\", array(\"location\"=>\"test://1\"));\n$client->Test(\"str\");\n$client->__soapCall(\"Test\",\n                    array(\"arg1\"),\n                     array(\"location\"=>\"test://2\"));\n$old = $client->__setLocation(\"test://3\");\necho \"$old\\n\";\n$client->Test(\"str\");\n$client->Test(\"str\");\n$client->__setLocation($old);\n$client->Test(\"str\");\n$old = $client->__setLocation();\n$client->Test(\"str\");\n$client->__setLocation($old);\n$client->Test(\"str\");\n$client->__setLocation(null);\n$client->Test(\"str\");\nvar_dump($client->__setLocation());\n?>")).toMatchSnapshot();
  });
});
