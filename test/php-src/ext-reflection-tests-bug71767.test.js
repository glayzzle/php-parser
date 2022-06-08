// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/bug71767.phpt
  it("Bug #71767 (ReflectionMethod::getDocComment returns the wrong comment)", function () {
    expect(parser.parseCode("<?php\n/** Correct docblock */\nfunction foo(\n    /** wrong docblock */\n    $arg\n) {\n}\nclass Foo {\n    /** Correct docblock */\n    public function bar(\n        /** wrong docblock */\n        $arg\n    ) {\n    }\n}\n/** Correct docblock */\n$func = function(\n    /** wrong docblock */\n    $arg\n) {\n};\n/** Correct docblock */\n$func2 = fn(\n    /** wrong docblock */\n    $arg\n) => null;\n$reflectionFunction = new ReflectionFunction('foo');\n$reflectionClass = new ReflectionClass(Foo::class);\n$reflectionClosure = new ReflectionFunction($func);\n$reflectionArrowFn = new ReflectionFunction($func2);\necho $reflectionFunction->getDocComment() . PHP_EOL;\necho $reflectionClass->getMethod('bar')->getDocComment() . PHP_EOL;\necho $reflectionClosure->getDocComment() . PHP_EOL;\necho $reflectionArrowFn->getDocComment() . PHP_EOL;\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
