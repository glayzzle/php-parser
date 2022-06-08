// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/simplexml/tests/013.phpt
  it("SimpleXML: Split text content", function () {
    expect(parser.parseCode("<?php\n$xml =<<<EOF\n<?xml version=\"1.0\" encoding=\"ISO-8859-1\" ?>\n<foo>bar<baz/>bar</foo>\nEOF;\n$sxe = simplexml_load_string($xml);\nvar_dump((string)$sxe);\n?>")).toMatchSnapshot();
  });
});
