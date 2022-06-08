// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/schema/schema005.phpt
  it("SOAP XML Schema 5: simpleType/restriction (inline type)", function () {
    expect(parser.parseCode("<?php\ninclude \"test_schema.inc\";\n$schema = <<<EOF\n    <simpleType name=\"testType\">\n        <restriction>\n            <simpleType name=\"testType2\">\n            <restriction base=\"xsd:int\"/>\n        </simpleType>\n      </restriction>\n    </simpleType>\nEOF;\ntest_schema($schema,'type=\"tns:testType\"',123.5);\necho \"ok\";\n?>")).toMatchSnapshot();
  });
});
