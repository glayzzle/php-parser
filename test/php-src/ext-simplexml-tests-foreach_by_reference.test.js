// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/simplexml/tests/foreach_by_reference.phpt
  it("SimpleXml: foreach by reference", function () {
    expect(parser.parseCode("<?php\n$xml = <<<XML\n<people>\n  <person>Lucy</person>\n  <person>Mikasa</person>\n</people>\nXML;\n$people = simplexml_load_string($xml);\nforeach ($people as &$person) {}\n?>")).toMatchSnapshot();
  });
});
