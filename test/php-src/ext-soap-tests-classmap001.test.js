// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/classmap001.phpt
  it("SOAP Classmap 1: SoapServer support for classmap", function () {
    expect(parser.parseCode("<?php\n$GLOBALS['HTTP_RAW_POST_DATA']=\"\n<env:Envelope xmlns:env=\\\"http://schemas.xmlsoap.org/soap/envelope/\\\"\n    xmlns:xsi=\\\"http://www.w3.org/2001/XMLSchema-instance\\\"\n    xmlns:xsd=\\\"http://www.w3.org/2001/XMLSchema\\\"\n    xmlns:enc=\\\"http://schemas.xmlsoap.org/soap/encoding/\\\"\n    xmlns:ns1=\\\"http://schemas.nothing.com\\\"\n>\n  <env:Body>\n <dotest>\n  <book xsi:type=\\\"ns1:book\\\">\n    <a xsi:type=\\\"xsd:string\\\">Blaat</a>\n    <b xsi:type=\\\"xsd:string\\\">aap</b>\n</book>\n</dotest>\n </env:Body>\n<env:Header/>\n</env:Envelope>\";\nclass test{\n    function dotest(book $book){\n        $classname=get_class($book);\n        return \"Classname: \".$classname;\n    }\n}\nclass book{\n    public $a=\"a\";\n    public $b=\"c\";\n}\n$options=Array(\n        'actor' =>'http://schema.nothing.com',\n        'classmap' => array('book'=>'book', 'wsdltype2'=>'classname2')\n        );\n$server = new SoapServer(__DIR__.\"/classmap.wsdl\",$options);\n$server->setClass(\"test\");\n$server->handle($GLOBALS['HTTP_RAW_POST_DATA']);\necho \"ok\\n\";\n?>")).toMatchSnapshot();
  });
});
