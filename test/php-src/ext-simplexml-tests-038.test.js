// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/simplexml/tests/038.phpt
  it("SimpleXML: Property assignment return value", function () {
    expect(parser.parseCode("<?php\n$xml =<<<EOF\n<root></root>\nEOF;\n$root = simplexml_load_string($xml);\nvar_dump($root->prop = 42);\n?>")).toMatchSnapshot();
  });
});
