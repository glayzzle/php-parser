// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug72373.phpt
  it("Bug #72373: TypeError after Generator function w/declared return type finishes", function () {
    expect(parser.parseCode("<?php\nfunction foo() : Generator {\n    yield 1;\n    yield 2;\n    yield 3;\n}\nforeach (foo() as $bar) {\n    echo $bar . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
