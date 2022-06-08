// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/bug70001.phpt
  it("Bug #70001 (Assigning to DOMNode::textContent does additional entity encoding)", function () {
    expect(parser.parseCode("<?php\n$element = new DOMText('<p>foo & bar</p>');\nvar_dump($element->textContent);\n$element = (new DOMDocument())->createTextNode('<p>foo & bar</p>');\nvar_dump($element->textContent);\n$element->textContent = ('<p>foo & bar</p>');\nvar_dump($element->textContent);\n?>")).toMatchSnapshot();
  });
});
