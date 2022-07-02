// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug70397.phpt
  it("Bug #70397 (Segmentation fault when using Closure::call and yield)", function () {
    expect(parser.parseCode("<?php\n$f = function () {\n    $this->value = true;\n    yield $this->value;\n};\nvar_dump($f->call(new class {})->current());\n?>")).toMatchSnapshot();
  });
});
