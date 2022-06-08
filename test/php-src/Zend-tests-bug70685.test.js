// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug70685.phpt
  it("Bug #70685: Segfault for getClosure() internal method rebind with invalid $this", function () {
    expect(parser.parseCode("<?php\nclass cls {}\n$c = (new ReflectionMethod('SplStack', 'count'))->getClosure(new SplStack);\n$c = $c->bindTo(new cls);\nvar_dump($c);\n$c = (new ReflectionMethod('SplStack', 'count'))->getClosure(new SplStack);\n$c = $c->bindTo(new SplStack, 'cls');\nvar_dump($c);\n?>")).toMatchSnapshot();
  });
});
