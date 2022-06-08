// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/schema/schema008.phpt
  it("SOAP XML Schema 8: simpleType/restriction (anonymous, inside an ellement)", function () {
    expect(parser.parseCode("<?php\ninclude \"test_schema.inc\";\n$schema = <<<EOF\n<element name=\"testElement\">\n    <simpleType>\n        <restriction>\n            <simpleType name=\"testType2\">\n            <restriction base=\"xsd:int\"/>\n        </simpleType>\n      </restriction>\n    </simpleType>\n</element>\nEOF;\ntest_schema($schema,'element=\"tns:testElement\"',123.5);\necho \"ok\";\n?>")).toMatchSnapshot();
  });
});
