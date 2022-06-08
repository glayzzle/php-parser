// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/simplexml/tests/bug63575.phpt
  it("Bug #63575 (Root elements are not properly cloned)", function () {
    expect(parser.parseCode("<?php\n$xml = '<a><b></b></a>';\n$o1 = new SimpleXMlElement($xml);\n$o2 = clone $o1;\n$r = current($o2->xpath('/a'));\n$r->addChild('c', new SimpleXMlElement('<c></c>'));\necho $o1->asXML(), PHP_EOL, $o2->asXML();\n?>")).toMatchSnapshot();
  });
});
