// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/server030.phpt
  it("SOAP Server 30: Handling classes which extend the SPL ArrayObject or ArrayIterator as arrays in wsdl mode", function () {
    expect(parser.parseCode("<?php\nclass ItemArray extends ArrayObject {\n}\nclass Item {\n    public $text;\n}\nclass handlerClass {\n    public function getItems()\n    {\n        $items = new ItemArray(array());\n        for ($i = 0; $i < 10; $i++) {\n            $item = new Item();\n            $item->text = 'text'.$i;\n            $items[] = $item;\n        }\n        return $items;\n    }\n}\n$server = new SoapServer(__DIR__.\"/server030.wsdl\");\n$server->setClass('handlerClass');\n$HTTP_RAW_POST_DATA = <<<EOF\n<?xml version=\"1.0\" encoding=\"ISO-8859-1\"?>\n<SOAP-ENV:Envelope\n  SOAP-ENV:encodingStyle=\"http://schemas.xmlsoap.org/soap/encoding/\"\n  xmlns:SOAP-ENV=\"http://schemas.xmlsoap.org/soap/envelope/\">\n  <SOAP-ENV:Body>\n    <getItems/>\n  </SOAP-ENV:Body>\n</SOAP-ENV:Envelope>\nEOF;\n$server->handle($HTTP_RAW_POST_DATA);\necho \"ok\\n\";\n?>")).toMatchSnapshot();
  });
});
