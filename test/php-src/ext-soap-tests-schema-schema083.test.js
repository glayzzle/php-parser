// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/schema/schema083.phpt
  it("SOAP XML Schema 83: SOAP 1.2 Array with SOAP_USE_XSI_ARRAY_TYPE", function () {
    expect(parser.parseCode("<?php\ninclude \"test_schema.inc\";\n$schema = <<<EOF\n    <complexType name=\"testType\">\n        <complexContent>\n            <restriction base=\"enc12:Array\" xmlns:enc12=\"http://www.w3.org/2003/05/soap-encoding\">\n        <attribute ref=\"enc12:itemType\" wsdl:itemType=\"int\"/>\n        <attribute ref=\"enc12:arraySize\" wsdl:arraySize=\"*\"/>\n        </restriction>\n    </complexContent>\n    </complexType>\nEOF;\ntest_schema($schema,'type=\"tns:testType\"',array(123,123.5),\"rpc\",\"encoded\",'',SOAP_USE_XSI_ARRAY_TYPE);\necho \"ok\";\n?>")).toMatchSnapshot();
  });
});
