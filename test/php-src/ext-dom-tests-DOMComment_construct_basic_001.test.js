// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/DOMComment_construct_basic_001.phpt
  it("DOMComment::__construct() with constructor called twice.", function () {
    expect(parser.parseCode("<?php\n$dom = new DOMDocument('1.0', 'UTF-8');\n$element = $dom->appendChild(new DOMElement('root'));\n$comment = new DOMComment(\"This is the first comment.\");\n$comment->__construct(\"This is the second comment.\");\n$comment = $element->appendChild($comment);\nprint $dom->saveXML();\n?>")).toMatchSnapshot();
  });
});
