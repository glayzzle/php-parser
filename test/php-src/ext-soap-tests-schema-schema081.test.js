// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/schema/schema081.phpt
  it("SOAP XML Schema 81: SOAP 1.1 Array with SOAP_USE_XSI_ARRAY_TYPE", function () {
    expect(parser.parseCode("<?php\ninclude \"test_schema.inc\";\n$schema = <<<EOF\n    <complexType name=\"testType\">\n        <complexContent>\n            <restriction base=\"SOAP-ENC:Array\">\n        <attribute ref=\"SOAP-ENC:arrayType\" wsdl:arrayType=\"int[]\"/>\n        </restriction>\n    </complexContent>\n    </complexType>\nEOF;\ntest_schema($schema,'type=\"tns:testType\"',array(123,123.5),\"rpc\",\"encoded\",'',SOAP_USE_XSI_ARRAY_TYPE);\necho \"ok\";\n?>")).toMatchSnapshot();
  });
});
