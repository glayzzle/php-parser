// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/return_types/006.phpt
  it("Return type allowed in child when parent does not have return type", function () {
    expect(parser.parseCode("<?php\nclass Comment {}\nclass CommentsIterator extends ArrayIterator implements Iterator {\n    function current() : Comment {\n        return parent::current();\n    }\n}\n$comments = new CommentsIterator([new Comment]);\nforeach ($comments as $comment) {\n    var_dump($comment);\n}\n?>")).toMatchSnapshot();
  });
});
