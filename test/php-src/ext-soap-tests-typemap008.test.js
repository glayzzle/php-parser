// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/typemap008.phpt
  it("SOAP Typemap 8: SoapClient support for typemap's to_xml() (without WSDL, using SoapVar)", function () {
    expect(parser.parseCode("<?php\nclass TestSoapClient extends SoapClient{\n  function __doRequest($request, $location, $action, $version, $one_way = 0): ?string {\n        echo $request;\n        exit;\n    }\n}\nclass book{\n    public $a=\"a\";\n    public $b=\"c\";\n}\nfunction book_to_xml($book) {\n    return '<book xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"><a xsi:type=\"xsd:string\">'.$book->a.'!</a><b xsi:type=\"xsd:string\">'.$book->b.'!</b></book>';\n}\n$options=Array(\n        'uri'      => 'http://schemas.nothing.com',\n        'location' => 'test://',\n        'actor'    => 'http://schemas.nothing.com',\n        'typemap'  => array(array(\"type_ns\"   => \"http://schemas.nothing.com\",\n                                  \"type_name\" => \"book\",\n                                  \"to_xml\"  => \"book_to_xml\"))\n        );\n$client = new TestSoapClient(NULL, $options);\n$book = new book();\n$book->a = \"foo\";\n$book->b = \"bar\";\n$ret = $client->dotest(new SoapVar($book, null, \"book\", \"http://schemas.nothing.com\"));\nvar_dump($ret);\necho \"ok\\n\";\n?>")).toMatchSnapshot();
  });
});
