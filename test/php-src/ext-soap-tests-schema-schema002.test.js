// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/schema/schema002.phpt
  it("SOAP XML Schema 2: simpleType/restriction (reference to type)", function () {
    expect(parser.parseCode("<?php\ninclude \"test_schema.inc\";\n$schema = <<<EOF\n    <simpleType name=\"testType2\">\n        <restriction base=\"xsd:int\"/>\n    </simpleType>\n    <simpleType name=\"testType\">\n        <restriction base=\"tns:testType2\"/>\n    </simpleType>\nEOF;\ntest_schema($schema,'type=\"tns:testType\"',123.5);\necho \"ok\";\n?>")).toMatchSnapshot();
  });
});
