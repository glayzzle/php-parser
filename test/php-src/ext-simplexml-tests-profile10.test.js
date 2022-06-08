// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/simplexml/tests/profile10.phpt
  it("SimpleXML [profile]: Accessing two attributes with the same name, but different namespaces", function () {
    expect(parser.parseCode("<?php\nerror_reporting(E_ALL & ~E_NOTICE);\n$root = simplexml_load_string('<?xml version=\"1.0\"?>\n<root xmlns:reserved=\"reserved-ns\" xmlns:special=\"special-ns\">\n <child reserved:attribute=\"Sample\" special:attribute=\"Test\" />\n</root>\n');\n$rsattr = $root->child->attributes('reserved-ns');\n$spattr = $root->child->attributes('special-ns');\necho $rsattr['attribute'];\necho \"\\n\";\necho $spattr['attribute'];\necho \"\\n---Done---\\n\";\n?>")).toMatchSnapshot();
  });
});
