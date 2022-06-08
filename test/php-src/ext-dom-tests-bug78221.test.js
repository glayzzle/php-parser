// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/bug78221.phpt
  it("Bug #78221 (DOMNode::normalize() doesn't remove empty text nodes)", function () {
    expect(parser.parseCode("<?php\n$doc = new DOMDocument();\n$doc->loadHTML('<p id=x>foo</p>');\n$p = $doc->getElementById('x');\n$p->childNodes[0]->textContent = '';\n$p->normalize();\nvar_dump($p->childNodes->length);\n?>")).toMatchSnapshot();
  });
});
