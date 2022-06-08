// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/typemap010.phpt
  it("SOAP typemap 10: SoapServer support for typemap's to_xml() (SoapFault)", function () {
    expect(parser.parseCode("<?php\n$GLOBALS['HTTP_RAW_POST_DATA']=\"\n<env:Envelope xmlns:env=\\\"http://schemas.xmlsoap.org/soap/envelope/\\\"\n    xmlns:xsi=\\\"http://www.w3.org/2001/XMLSchema-instance\\\"\n    xmlns:xsd=\\\"http://www.w3.org/2001/XMLSchema\\\"\n    xmlns:enc=\\\"http://schemas.xmlsoap.org/soap/encoding/\\\"\n    xmlns:ns1=\\\"http://schemas.nothing.com\\\"\n>\n  <env:Body>\n<ns1:dotest2>\n<dotest2 xsi:type=\\\"xsd:string\\\">???</dotest2>\n</ns1:dotest2>\n </env:Body>\n<env:Header/>\n</env:Envelope>\";\nfunction book_to_xml($book) {\n    throw new SoapFault(\"Server\", \"Conversion Fault\");\n}\nclass test{\n    function dotest2($str){\n        $book = new book;\n        $book->a = \"foo\";\n        $book->b = \"bar\";\n        return $book;\n    }\n}\nclass book{\n    public $a=\"a\";\n    public $b=\"c\";\n}\n$options=Array(\n        'actor'   =>'http://schemas.nothing.com',\n        'typemap' => array(array(\"type_ns\"   => \"http://schemas.nothing.com\",\n                                 \"type_name\" => \"book\",\n                                 \"to_xml\"    => \"book_to_xml\"))\n        );\n$server = new SoapServer(__DIR__.\"/classmap.wsdl\",$options);\n$server->setClass(\"test\");\n$server->handle($HTTP_RAW_POST_DATA);\necho \"ok\\n\";\n?>")).toMatchSnapshot();
  });
});
