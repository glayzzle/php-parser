// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/simplexml/tests/profile09.phpt
  it("SimpleXML [profile]: Accessing a namespaced element without a namespace", function () {
    expect(parser.parseCode("<?php\nerror_reporting(E_ALL & ~E_NOTICE);\n$root = simplexml_load_string('<?xml version=\"1.0\"?>\n<root xmlns:reserved=\"reserved-ns\">\n <reserved:child>Hello</reserved:child>\n</root>\n');\necho $root->child;\necho \"\\n---Done---\\n\";\n?>")).toMatchSnapshot();
  });
});
