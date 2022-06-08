// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/schema/schema039.phpt
  it("SOAP XML Schema 39: Structure with attributes (attributeGroup)", function () {
    expect(parser.parseCode("<?php\ninclude \"test_schema.inc\";\n$schema = <<<EOF\n    <complexType name=\"testType\">\n        <sequence>\n            <element name=\"str\" type=\"string\"/>\n        </sequence>\n        <attributeGroup ref=\"tns:intGroup\"/>\n    </complexType>\n    <attributeGroup name=\"intGroup\">\n        <attribute name=\"int\" type=\"int\"/>\n    </attributeGroup>\nEOF;\ntest_schema($schema,'type=\"tns:testType\"',(object)array(\"str\"=>\"str\",\"int\"=>123.5));\necho \"ok\";\n?>")).toMatchSnapshot();
  });
});
