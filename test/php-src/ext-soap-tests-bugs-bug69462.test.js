// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/bugs/bug69462.phpt
  it("Bug #69462 (__soapCall with a SoapVar that has a namespace but no name crashes)", function () {
    expect(parser.parseCode("<?php\n$namespace = \"http://example.com/ns\";\n$client = new SoapClient(null, [ 'exceptions' => 1, 'location' => \"\", 'uri' => $namespace ]);\n$soapvar = new SoapVar(\n    array(\n        new SoapVar('value', XSD_STRING, null, null, null, $namespace)\n    ),\n    SOAP_ENC_OBJECT, null, null, 'name', $namespace\n);\ntry {\n    $client->__soapCall('method', array($soapvar));\n}\ncatch (Exception $e) {\n    /* ignore any errors, we're testing for segmentation fault anyway */\n    echo \"good\";\n}\n?>")).toMatchSnapshot();
  });
});
