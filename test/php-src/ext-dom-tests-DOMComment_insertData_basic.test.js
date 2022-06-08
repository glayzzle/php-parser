// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/DOMComment_insertData_basic.phpt
  it("Test inserting data into a DOMComment basic test", function () {
    expect(parser.parseCode("<?php\n//correct offset\n$dom = new DomDocument();\n$comment = $dom->createComment('test-comment');\n$comment->insertData(4,'-inserted');\n$dom->appendChild($comment);\necho $dom->saveXML();\n?>")).toMatchSnapshot();
  });
});
