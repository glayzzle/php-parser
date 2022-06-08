// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/typemap001.phpt
  it("SOAP typemap 1: SoapServer support for typemap's from_xml()", function () {
    expect(parser.parseCode("<?php\n$GLOBALS['HTTP_RAW_POST_DATA']=\"\n<env:Envelope xmlns:env=\\\"http://schemas.xmlsoap.org/soap/envelope/\\\"\n    xmlns:xsi=\\\"http://www.w3.org/2001/XMLSchema-instance\\\"\n    xmlns:xsd=\\\"http://www.w3.org/2001/XMLSchema\\\"\n    xmlns:enc=\\\"http://schemas.xmlsoap.org/soap/encoding/\\\"\n    xmlns:ns1=\\\"http://schemas.nothing.com\\\"\n>\n  <env:Body>\n <ns1:dotest>\n  <book xsi:type=\\\"ns1:book\\\">\n    <a xsi:type=\\\"xsd:string\\\">foo</a>\n    <b xsi:type=\\\"xsd:string\\\">bar</b>\n</book>\n</ns1:dotest>\n </env:Body>\n<env:Header/>\n</env:Envelope>\";\nfunction book_from_xml($xml) {\n    $sxe = simplexml_load_string($xml);\n    $obj = new book;\n    $obj->a = (string)$sxe->a;\n    $obj->b = (string)$sxe->b;\n    return $obj;\n}\nclass test{\n    function dotest($book){\n        $classname=get_class($book);\n        return \"Object: \".$classname. \"(\".$book->a.\",\".$book->b.\")\";\n    }\n}\nclass book{\n    public $a=\"a\";\n    public $b=\"c\";\n}\n$options=Array(\n        'actor'   =>'http://schemas.nothing.com',\n        'typemap' => array(array(\"type_ns\"   => \"http://schemas.nothing.com\",\n                                 \"type_name\" => \"book\",\n                                 \"from_xml\"  => \"book_from_xml\"))\n        );\n$server = new SoapServer(__DIR__.\"/classmap.wsdl\",$options);\n$server->setClass(\"test\");\n$server->handle($HTTP_RAW_POST_DATA);\necho \"ok\\n\";\n?>")).toMatchSnapshot();
  });
});
