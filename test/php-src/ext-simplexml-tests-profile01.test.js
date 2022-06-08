// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/simplexml/tests/profile01.phpt
  it("SimpleXML [profile]: Accessing a simple node", function () {
    expect(parser.parseCode("<?php\n$root = simplexml_load_string('<?xml version=\"1.0\"?>\n<root>\n <child>Hello</child>\n</root>\n');\necho $root->child;\necho \"\\n---Done---\\n\";\n?>")).toMatchSnapshot();
  });
});
