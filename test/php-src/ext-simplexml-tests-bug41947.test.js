// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/simplexml/tests/bug41947.phpt
  it("Bug #41947 (addChild incorrectly registers empty strings as namespaces)", function () {
    expect(parser.parseCode("<?php\n$xml = simplexml_load_string('<?xml version=\"1.0\" encoding=\"utf-8\"?><root xmlns:myns=\"http://myns\" />');\n$grandchild = $xml->addChild('child', null, 'http://myns')->addChild('grandchild', 'hello', '');\n$gchild = $xml->xpath(\"//grandchild\");\nif (count($gchild) > 0) {\n    echo $gchild[0].\"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
