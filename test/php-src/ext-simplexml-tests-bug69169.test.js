// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/simplexml/tests/bug69169.phpt
  it("Bug #69169 (simplexml_load_string parse wrongly when xml given in one row)", function () {
    expect(parser.parseCode("<?php\n$a = '<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<root a=\"b\">\n    <row b=\"y\">\n        <item s=\"t\" />\n    </row>\n    <row p=\"c\">\n        <item y=\"n\" />\n    </row>\n</root>';\n$b = str_replace(array(\"\\n\", \"\\r\", \"\\t\"), \"\", $a);\n$simple_xml = simplexml_load_string($b);\nprint_r($simple_xml);\n?>")).toMatchSnapshot();
  });
});
