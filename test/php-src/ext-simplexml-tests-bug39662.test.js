// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/simplexml/tests/bug39662.phpt
  it("Bug #39662 (Segfault when calling asXML() of a cloned SimpleXMLElement)", function () {
    expect(parser.parseCode("<?php\n$xml = '<?xml version=\"1.0\" encoding=\"utf-8\" ?>\n<test>\n</test>';\n$root = simplexml_load_string($xml);\n$clone = clone $root;\nvar_dump($root);\nvar_dump($clone);\nvar_dump($clone->asXML());\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
