// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug70681.phpt
  it("Bug #70681: Segfault when binding $this of internal instance method to null", function () {
    expect(parser.parseCode("<?php\n$c = (new ReflectionMethod('SplStack', 'count'))->getClosure(new SplStack);\n$c = $c->bindTo(null);\n$c = (new ReflectionFunction('strlen'))->getClosure();\n$c = $c->bindTo(null);\nvar_dump($c(\"foo\"));\n?>")).toMatchSnapshot();
  });
});
