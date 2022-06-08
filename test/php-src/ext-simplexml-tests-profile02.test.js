// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/simplexml/tests/profile02.phpt
  it("SimpleXML [profile]: Accessing an array of subnodes", function () {
    expect(parser.parseCode("<?php\n$root = simplexml_load_string('<?xml version=\"1.0\"?>\n<root>\n <child>Hello</child>\n <child>World</child>\n</root>\n');\nforeach ($root->child as $child) {\n    echo \"$child \";\n}\necho \"\\n---Done---\\n\";\n?>")).toMatchSnapshot();
  });
});
