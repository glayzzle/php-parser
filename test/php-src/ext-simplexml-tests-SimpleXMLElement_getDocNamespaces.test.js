// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/simplexml/tests/SimpleXMLElement_getDocNamespaces.phpt
  it("Testing getDocNamespaces() with invalid XML", function () {
    expect(parser.parseCode("<?php\n$xml = @new SimpleXMLElement(\"X\",1);\nvar_dump($xml->getDocNamespaces());\n?>")).toMatchSnapshot();
  });
});
