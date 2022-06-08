// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/schema/schema019.phpt
  it("SOAP XML Schema 19: union with list", function () {
    expect(parser.parseCode("<?php\ninclude \"test_schema.inc\";\n$schema = <<<EOF\n    <simpleType name=\"testType\">\n        <union>\n            <simpleType>\n                <restriction base=\"float\"/>\n            </simpleType>\n            <simpleType>\n                <list itemType=\"int\"/>\n            </simpleType>\n        </union>\n    </simpleType>\nEOF;\ntest_schema($schema,'type=\"tns:testType\"',\"123.5 456.7\");\necho \"ok\";\n?>")).toMatchSnapshot();
  });
});
