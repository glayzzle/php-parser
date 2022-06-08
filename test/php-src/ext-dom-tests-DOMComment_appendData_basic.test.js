// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/DOMComment_appendData_basic.phpt
  it("Test adding data to a DOMComment", function () {
    expect(parser.parseCode("<?php\n$dom = new DomDocument();\n$comment = $dom->createComment('test-comment');\n$comment->appendData('-more-data');\n$dom->appendChild($comment);\n$dom->saveXML();\necho $dom->saveXML();\n?>")).toMatchSnapshot();
  });
});
