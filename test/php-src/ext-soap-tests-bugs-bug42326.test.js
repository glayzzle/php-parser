// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/bugs/bug42326.phpt
  it("Bug #42326 (SoapServer crash)", function () {
    expect(parser.parseCode("<?php\n$request = <<<EOF\n<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<SOAP-ENV:Envelope xmlns:SOAP-ENV=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns:ns1=\"http://www.example.com/\"><SOAP-ENV:Body><ns1:GetProductsRequest><time></time></ns1:GetProductsRequest></SOAP-ENV:Body></SOAP-ENV:Envelope>\nEOF;\n$soap_admin_classmap = array('productDetailsType' => 'SOAP_productDetailsType',\n                             'GetProductsRequest' => 'SOAP_GetProductsRequest',\n                             'GetProductsResponse' => 'SOAP_GetProductsResponse');\nclass SOAP_productDetailsType {\n    public $id = 0;\n}\nclass SOAP_GetProductsRequest {\n    public $time = '';\n}\nclass SOAP_GetProductsResponse {\n    public $products;\n    function __construct(){\n        $this->products = new SOAP_productDetailsType();\n    }\n}\nclass SOAP_Admin {\n    public function GetProducts($time){\n        return new SOAP_GetProductsResponse();\n    }\n}\n$soap = new SoapServer(__DIR__.'/bug42326.wsdl', array('classmap' => $soap_admin_classmap));\n$soap->setClass('SOAP_Admin');\nob_start();\n$soap->handle($request);\nob_end_clean();\necho \"ok\\n\";\n?>")).toMatchSnapshot();
  });
});
