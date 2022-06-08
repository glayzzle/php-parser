// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug70187.phpt
  it("Bug #70187 (Notice: unserialize(): Unexpected end of serialized data)", function () {
    expect(parser.parseCode("<?php\nclass A {\n    public $b;\n}\n$a = new A;\nvar_dump($a); // force properties HT\nunset($a->b);\nvar_dump(serialize($a));\n?>")).toMatchSnapshot();
  });
});
