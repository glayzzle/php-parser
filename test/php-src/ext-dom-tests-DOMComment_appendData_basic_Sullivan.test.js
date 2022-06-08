// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/DOMComment_appendData_basic_Sullivan.phpt
  it("DOMComment::appendData basic functionality test", function () {
    expect(parser.parseCode("<?php\n$document = new DOMDocument;\n$root = $document->createElement('root');\n$document->appendChild($root);\n$comment = $document->createElement('comment');\n$root->appendChild($comment);\n$commentnode = $document->createComment('');\n$comment->appendChild($commentnode);\n$commentnode->appendData('data');\necho \"Comment Length (one append): \" . $commentnode->length . \"\\n\";\n$commentnode->appendData('><&\"');\necho \"Comment Length (two appends): \" . $commentnode->length . \"\\n\";\necho \"Comment Content: \" . $commentnode->data . \"\\n\";\necho \"\\n\" . $document->saveXML();\n?>")).toMatchSnapshot();
  });
});
