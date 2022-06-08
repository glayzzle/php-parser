// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionFiber_basic.phpt
  it("ReflectionFiber basic tests", function () {
    expect(parser.parseCode("<?php\n$callable = function (): void {\n    $reflection = new ReflectionFiber(Fiber::getCurrent());\n    echo \"\\nWithin Fiber:\\n\";\n    var_dump($reflection->getExecutingFile());\n    var_dump($reflection->getExecutingLine());\n    var_dump($reflection->getTrace());\n    Fiber::suspend();\n};\n$fiber = new Fiber($callable);\n$reflection = new ReflectionFiber($fiber);\necho \"Before Start:\\n\";\nvar_dump($fiber === $reflection->getFiber());\nvar_dump($callable === $reflection->getCallable());\n$fiber->start();\necho \"\\nAfter Start:\\n\";\nvar_dump($reflection->getExecutingFile());\nvar_dump($reflection->getExecutingLine());\nvar_dump($callable === $reflection->getCallable());\nvar_dump($reflection->getTrace());\n$fiber->resume();\necho \"\\nAfter Resume:\\n\";\n$reflection->getTrace();\n?>")).toMatchSnapshot();
  });
});
