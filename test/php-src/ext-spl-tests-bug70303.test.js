// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug70303.phpt
  it("Bug #70303 (Incorrect constructor reflection for ArrayObject)", function () {
    expect(parser.parseCode("<?php\n$f = new ReflectionClass('ArrayObject');\n$c = $f->getConstructor();\n$params = $c->getParameters();\n$param = $params[0];\nvar_dump($param->isOptional());\n?>")).toMatchSnapshot();
  });
});
