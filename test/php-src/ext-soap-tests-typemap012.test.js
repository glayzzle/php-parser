// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/typemap012.phpt
  it("SOAP Typemap 12: SoapClient support for typemap's to_xml() (SoapFault)", function () {
    expect(parser.parseCode("<?php\nclass TestSoapClient extends SoapClient{\n  function __doRequest($request, $location, $action, $version, $one_way = 0): ?string {\n        echo $request;\n        exit;\n    }\n}\nclass book{\n    public $a=\"a\";\n    public $b=\"c\";\n}\nfunction book_to_xml($book) {\n    throw new SoapFault(\"Client\", \"Conversion Error\");\n}\n$options=Array(\n        'actor' =>'http://schemas.nothing.com',\n        'typemap' => array(array(\"type_ns\"   => \"http://schemas.nothing.com\",\n                                 \"type_name\" => \"book\",\n                                 \"to_xml\"  => \"book_to_xml\"))\n        );\n$client = new TestSoapClient(__DIR__.\"/classmap.wsdl\",$options);\n$book = new book();\n$book->a = \"foo\";\n$book->b = \"bar\";\ntry {\n    $ret = $client->dotest($book);\n} catch (SoapFault $e) {\n    $ret = \"SoapFault = \" . $e->faultcode . \" - \" . $e->faultstring;\n}\nvar_dump($ret);\necho \"ok\\n\";\n?>")).toMatchSnapshot();
  });
});
