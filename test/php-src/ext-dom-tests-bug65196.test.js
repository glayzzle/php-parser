// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/bug65196.phpt
  it("bug #65196 (Passing DOMDocumentFragment to DOMDocument::saveHTML() Produces invalid Markup)", function () {
    expect(parser.parseCode("<?php\n$dom = new DOMDocument();\n$frag1 = $dom->createDocumentFragment();\nvar_dump($dom->saveHTML($frag1));\n$frag2 = $dom->createDocumentFragment();\n$div = $dom->createElement('div');\n$div->appendChild($dom->createElement('span'));\n$frag2->appendChild($div);\n$frag2->appendChild($dom->createElement('div'));\n$frag2->appendChild($dom->createElement('div'));\nvar_dump($dom->saveHTML($frag2));\n?>")).toMatchSnapshot();
  });
});
