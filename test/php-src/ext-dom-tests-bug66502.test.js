// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/bug66502.phpt
  it("Bug #66502 (DOM document dangling reference)", function () {
    expect(parser.parseCode("<?php\n$dom = new DOMDocument('1.0', 'UTF-8');\n$element = $dom->appendChild(new DOMElement('root'));\n$comment = new DOMComment(\"Comment 0\");\n$comment = $element->appendChild($comment);\n$comment->__construct(\"Comment 1\");\n$comment->__construct(\"Comment 2\");\n$comment->__construct(\"Comment 3\");\necho 'DONE', PHP_EOL;\n?>")).toMatchSnapshot();
  });
});
