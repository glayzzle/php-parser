// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/simplexml/tests/029.phpt
  it("SimpleXML: foreach and count", function () {
    expect(parser.parseCode("<?php\n$xml =<<<EOF\n<people>\n  <person name=\"Joe\"/>\n  <person name=\"John\">\n    <children>\n      <person name=\"Joe\"/>\n    </children>\n  </person>\n  <person name=\"Jane\"/>\n</people>\nEOF;\n$people = simplexml_load_string($xml);\nforeach($people as $person)\n{\n    var_dump((string)$person['name']);\n    var_dump(count($people));\n    var_dump(count($person));\n}\n?>")).toMatchSnapshot();
  });
});
