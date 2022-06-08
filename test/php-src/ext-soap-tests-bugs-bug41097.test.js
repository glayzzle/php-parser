// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/bugs/bug41097.phpt
  it("Bug #41097 (ext/soap returning associative array as indexed without using WSDL)", function () {
    expect(parser.parseCode("<?php\nfunction test($soap, $array) {\n  $soap->test($array);\n  echo (strpos($soap->__getLastRequest(), ':Map\"') != false)?\"Map\\n\":\"Array\\n\";\n}\n$soap = new SoapClient(null, array('uri' => 'http://uri/', 'location' => 'test://', 'exceptions' => 0, 'trace' => 1));\ntest($soap, array('Foo', 'Bar'));\ntest($soap, array(5 => 'Foo', 10 => 'Bar'));\ntest($soap, array('5' => 'Foo', '10' => 'Bar'));\n$soap->test(new SoapVar(array('Foo', 'Bar'), APACHE_MAP));\necho (strpos($soap->__getLastRequest(), ':Map\"') != false)?\"Map\\n\":\"Array\\n\";\n$soap->test(new SoapVar(array('Foo', 'Bar'), SOAP_ENC_ARRAY));\necho (strpos($soap->__getLastRequest(), ':Map\"') != false)?\"Map\\n\":\"Array\\n\";\n?>")).toMatchSnapshot();
  });
});
