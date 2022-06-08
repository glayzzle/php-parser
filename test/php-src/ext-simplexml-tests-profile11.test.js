// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/simplexml/tests/profile11.phpt
  it("SimpleXML [profile]: Accessing two elements with the same name, but different namespaces", function () {
    expect(parser.parseCode("<?php\nerror_reporting(E_ALL & ~E_NOTICE);\n$root = simplexml_load_string('<?xml version=\"1.0\"?>\n<root xmlns:reserved=\"reserved-ns\" xmlns:special=\"special-ns\">\n <reserved:child>Hello</reserved:child>\n <special:child>World</special:child>\n</root>\n');\nvar_dump($root->children('reserved-ns')->child);\nvar_dump($root->children('special-ns')->child);\nvar_dump((string)$root->children('reserved-ns')->child);\nvar_dump((string)$root->children('special-ns')->child);\nvar_dump($root->child);\n?>")).toMatchSnapshot();
  });
});
