// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/simplexml/tests/profile04.phpt
  it("SimpleXML [profile]: Accessing a namespaced element", function () {
    expect(parser.parseCode("<?php\n$root = simplexml_load_string('<?xml version=\"1.0\"?>\n<root xmlns:reserved=\"reserved-ns\">\n <reserved:child>Hello</reserved:child>\n</root>\n');\necho $root->children('reserved-ns')->child;\necho \"\\n---Done---\\n\";\n?>")).toMatchSnapshot();
  });
});
