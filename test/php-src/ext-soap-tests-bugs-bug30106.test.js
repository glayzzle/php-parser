// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/bugs/bug30106.phpt
  it("Bug #30106 (SOAP cannot not parse 'ref' element. Causes Uncaught SoapFault exception)", function () {
    expect(parser.parseCode("<?php\nini_set(\"soap.wsdl_cache_enabled\", 0);\nfunction getContinentList() {\n    return array(\"getContinentListResult\"=>array(\n      \"schema\"=>\"<xsd:schema><element name=\\\"test\\\" type=\\\"xsd:string\\\"/></xsd:schema>\",\n      \"any\"=>\"<test>Hello World!</test><test>Bye World!</test>\"));\n}\nclass LocalSoapClient extends SoapClient {\n  function __construct($wsdl, $options=array()) {\n    parent::__construct($wsdl, $options);\n    $this->server = new SoapServer($wsdl, $options);\n        $this->server->addFunction(\"getContinentList\");\n  }\n  function __doRequest($request, $location, $action, $version, $one_way = 0): ?string {\n    echo $request;\n    ob_start();\n    $this->server->handle($request);\n    $response = ob_get_contents();\n    ob_end_clean();\n    echo $response;\n    return $response;\n  }\n}\n$client = new LocalSoapClient(__DIR__.\"/bug30106.wsdl\");\nvar_dump($client->__getFunctions());\nvar_dump($client->__getTypes());\n$x = $client->getContinentList(array(\"AFFILIATE_ID\"=>1,\"PASSWORD\"=>\"x\"));\nvar_dump($x);\n?>")).toMatchSnapshot();
  });
});
