// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/schema/schema006.phpt
  it("SOAP XML Schema 6: simpleType/restriction (referenced by ellement)", function () {
    expect(parser.parseCode("<?php\ninclude \"test_schema.inc\";\n$schema = <<<EOF\n    <simpleType name=\"testType\">\n        <restriction>\n            <simpleType name=\"testType2\">\n            <restriction base=\"xsd:int\"/>\n        </simpleType>\n      </restriction>\n    </simpleType>\n    <element name=\"testElement\" type=\"tns:testType\"/>\nEOF;\ntest_schema($schema,'element=\"tns:testElement\"',123.5);\necho \"ok\";\n?>")).toMatchSnapshot();
  });
});
