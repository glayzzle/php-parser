// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/schema/schema041.phpt
  it("SOAP XML Schema 41: Structure (group)", function () {
    expect(parser.parseCode("<?php\ninclude \"test_schema.inc\";\n$schema = <<<EOF\n    <complexType name=\"testType\">\n        <group ref=\"tns:testGroup\"/>\n    </complexType>\n    <group name=\"testGroup\">\n        <sequence>\n            <element name=\"int\" type=\"int\"/>\n            <element name=\"str\" type=\"string\"/>\n        </sequence>\n    </group>\nEOF;\ntest_schema($schema,'type=\"tns:testType\"',(object)array(\"str\"=>\"str\",\"int\"=>123.5));\necho \"ok\";\n?>")).toMatchSnapshot();
  });
});
