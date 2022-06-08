// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/simplexml/tests/016a.phpt
  it("SimpleXML: concatenating attributes", function () {
    expect(parser.parseCode("<?php\n$xml =<<<EOF\n<people>\n   <person name=\"Foo\"></person>\n</people>\nEOF;\n$people = simplexml_load_string($xml);\nvar_dump($people->person['name']);\n$people->person['name'] .= 'Bar';\nvar_dump($people->person['name']);\n?>")).toMatchSnapshot();
  });
});
