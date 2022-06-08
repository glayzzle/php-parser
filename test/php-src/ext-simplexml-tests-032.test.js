// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/simplexml/tests/032.phpt
  it("SimpleXML: comparing instances", function () {
    expect(parser.parseCode("<?php\n$xml =<<<EOF\n<people>\n  <person name=\"Joe\"/>\n  <person name=\"John\">\n    <children>\n      <person name=\"Joe\"/>\n    </children>\n  </person>\n  <person name=\"Jane\"/>\n</people>\nEOF;\n$xml1 =<<<EOF\n<people>\n  <person name=\"John\">\n    <children>\n      <person name=\"Joe\"/>\n    </children>\n  </person>\n  <person name=\"Jane\"/>\n</people>\nEOF;\n$people = simplexml_load_string($xml);\n$people1 = simplexml_load_string($xml);\n$people2 = simplexml_load_string($xml1);\nvar_dump($people1 == $people);\nvar_dump($people2 == $people);\nvar_dump($people2 == $people1);\n?>")).toMatchSnapshot();
  });
});
