// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/simplexml/tests/profile06.phpt
  it("SimpleXML [profile]: Accessing a namespaced attribute", function () {
    expect(parser.parseCode("<?php\nerror_reporting(E_ALL & ~E_NOTICE);\n$root = simplexml_load_string('<?xml version=\"1.0\"?>\n<root xmlns:reserved=\"reserved-ns\">\n <child reserved:attribute=\"Sample\" />\n</root>\n');\n$attr = $root->child->attributes('reserved-ns');\necho $attr['attribute'];\necho \"\\n---Done---\\n\";\n?>")).toMatchSnapshot();
  });
});
