// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug69802_2.phpt
  it("Bug #69802 (Reflection on Closure::__invoke borks type hint class name)", function () {
    expect(parser.parseCode("<?php\n$f = (new ReflectionFunction('iterator_to_array'))->getClosure();\n$r = new ReflectionMethod($f, '__invoke');\nvar_dump($r->getParameters()[0]->getClass());\n?>")).toMatchSnapshot();
  });
});
