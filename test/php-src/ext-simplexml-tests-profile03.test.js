// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/simplexml/tests/profile03.phpt
  it("SimpleXML [profile]: Accessing an attribute", function () {
    expect(parser.parseCode("<?php\n$root = simplexml_load_string('<?xml version=\"1.0\"?>\n<root>\n <child attribute=\"Sample\" />\n</root>\n');\necho $root->child['attribute'];\necho \"\\n---Done---\\n\";\n?>")).toMatchSnapshot();
  });
});
