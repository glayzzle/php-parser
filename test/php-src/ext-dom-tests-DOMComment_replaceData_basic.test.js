// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/DOMComment_replaceData_basic.phpt
  it("Test replacing data into a DOMComment basic test", function () {
    expect(parser.parseCode("<?php\n$dom = new DomDocument();\n$comment = $dom->createComment('test-comment');\n$comment->replaceData(4,1,'replaced');\n$dom->appendChild($comment);\necho $dom->saveXML();\n// Replaces rest of string if count is greater than length of existing string\n$dom = new DomDocument();\n$comment = $dom->createComment('test-comment');\n$comment->replaceData(0,50,'replaced');\n$dom->appendChild($comment);\necho $dom->saveXML();\n?>")).toMatchSnapshot();
  });
});
