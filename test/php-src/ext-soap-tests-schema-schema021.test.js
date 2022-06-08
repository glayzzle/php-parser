// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/schema/schema021.phpt
  it("SOAP XML Schema 21: list of unions", function () {
    expect(parser.parseCode("<?php\ninclude \"test_schema.inc\";\n$schema = <<<EOF\n    <simpleType name=\"testType\">\n        <list>\n            <simpleType>\n                <union memberTypes=\"int float str\"/>\n            </simpleType>\n        </list>\n    </simpleType>\nEOF;\ntest_schema($schema,'type=\"tns:testType\"',\"123 123.5 456.7 str\");\necho \"ok\";\n?>")).toMatchSnapshot();
  });
});
