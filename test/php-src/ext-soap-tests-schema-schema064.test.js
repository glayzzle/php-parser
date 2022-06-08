// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/schema/schema064.phpt
  it("SOAP XML Schema 64: standard date/time types", function () {
    expect(parser.parseCode("<?php\ninclude \"test_schema.inc\";\n$schema = <<<EOF\n    <complexType name=\"testType\">\n        <sequence>\n            <element name=\"dateTime\" type=\"dateTime\"/>\n            <element name=\"time\" type=\"time\"/>\n            <element name=\"date\" type=\"date\"/>\n            <element name=\"gYearMonth\" type=\"gYearMonth\"/>\n            <element name=\"gYear\" type=\"gYear\"/>\n            <element name=\"gMonthDay\" type=\"gMonthDay\"/>\n            <element name=\"gDay\" type=\"gDay\"/>\n            <element name=\"gMonth\" type=\"gMonth\"/>\n        </sequence>\n    </complexType>\nEOF;\n$date = gmmktime(1,2,3,4,5,1976);\nputenv('TZ=GMT');\ntest_schema($schema,'type=\"tns:testType\"',array(\n    'dateTime' => $date,\n    'time' => $date,\n    'date' => $date,\n    'gYearMonth' => $date,\n    'gYear' => $date,\n    'gMonthDay' => $date,\n    'gDay' => $date,\n    'gMonth' => $date\n));\necho \"ok\";\n?>")).toMatchSnapshot();
  });
});
