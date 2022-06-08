// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/schema/schema055.phpt
  it("SOAP XML Schema 55: Apache Map (extension)", function () {
    expect(parser.parseCode("<?php\ninclude \"test_schema.inc\";\n$schema = <<<EOF\n    <complexType name=\"testType\">\n        <complexContent>\n            <extension base=\"apache:Map\" xmlns:apache=\"http://xml.apache.org/xml-soap\">\n        </extension>\n    </complexContent>\n    </complexType>\nEOF;\ntest_schema($schema,'type=\"testType\"',array('a'=>123,'b'=>123.5));\necho \"ok\";\n?>")).toMatchSnapshot();
  });
});
