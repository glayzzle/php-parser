// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/simplexml/tests/033.phpt
  it("SimpleXML: casting instances", function () {
    expect(parser.parseCode("<?php\n$xml =<<<EOF\n<people>\ntest\n  <person name=\"Joe\"/>\n  <person name=\"John\">\n    <children>\n      <person name=\"Joe\"/>\n    </children>\n  </person>\n  <person name=\"Jane\"/>\n</people>\nEOF;\n$foo = simplexml_load_string( \"<foo />\" );\n$people = simplexml_load_string($xml);\nvar_dump((bool)$foo);\nvar_dump((bool)$people);\nvar_dump((int)$foo);\nvar_dump((int)$people);\nvar_dump((double)$foo);\nvar_dump((double)$people);\nvar_dump((string)$foo);\nvar_dump((string)$people);\nvar_dump((array)$foo);\nvar_dump((array)$people);\nvar_dump((object)$foo);\nvar_dump((object)$people);\n?>")).toMatchSnapshot();
  });
});
