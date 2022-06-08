// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/server031.phpt
  it("SOAP Server 31: Handling classes which implements Iterator", function () {
    expect(parser.parseCode("<?php\nclass ItemArray implements Iterator {\n    private $a = array();\n    public function __construct(array $a) {\n        $this->a = $a;\n    }\n    public function rewind(): void    { reset($this->a); }\n    public function current(): mixed   { return current($this->a); }\n    public function key(): mixed       { return key($this->a); }\n    public function next(): void      { next($this->a); }\n    public function valid(): bool     { return (current($this->a) !== false); }\n}\nclass Item {\n    public $text;\n    public function __construct($n) {\n        $this->text = 'text'.$n;\n    }\n}\nclass handlerClass {\n    public function getItems()\n    {\n        return new ItemArray(array(\n                new Item(0),\n                new Item(1),\n                new Item(2),\n                new Item(3),\n                new Item(4),\n                new Item(5),\n                new Item(6),\n                new Item(7),\n                new Item(8),\n                new Item(9)\n            ));\n    }\n}\n$server = new SoapServer(__DIR__.\"/server030.wsdl\");\n$server->setClass('handlerClass');\n$HTTP_RAW_POST_DATA = <<<EOF\n<?xml version=\"1.0\" encoding=\"ISO-8859-1\"?>\n<SOAP-ENV:Envelope\n  SOAP-ENV:encodingStyle=\"http://schemas.xmlsoap.org/soap/encoding/\"\n  xmlns:SOAP-ENV=\"http://schemas.xmlsoap.org/soap/envelope/\">\n  <SOAP-ENV:Body>\n    <getItems/>\n  </SOAP-ENV:Body>\n</SOAP-ENV:Envelope>\nEOF;\n$server->handle($HTTP_RAW_POST_DATA);\necho \"ok\\n\";\n?>")).toMatchSnapshot();
  });
});
