// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/bug77088.phpt
  it("Bug #77088 (Segfault when using SoapClient with null options)", function () {
    expect(parser.parseCode("<?php\ntry\n{\n    $options = NULL;\n    $sClient = new SoapClient(\"test.wsdl\", $options);\n}\ncatch(TypeError $e)\n{\n    var_dump($e);\n}\n?>")).toMatchSnapshot();
  });
});
