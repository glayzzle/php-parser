// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/bug66430.phpt
  it("Bug #66430: ReflectionFunction::invoke does not invoke closure with object scope", function () {
    expect(parser.parseCode("<?php\nclass Alpha {\n    public $message = \"Valid representation\";\n    public function bravo() {\n        return $this->message;\n    }\n}\n$alpha = new Alpha();\necho \"alpha.bravo:                   \", $alpha->bravo().PHP_EOL;\n$reflection = new ReflectionObject($alpha);\n$method = $reflection->getMethod(\"bravo\");\n$closure = $method->getClosure($alpha);\n$reflectionC = new ReflectionFunction($closure);\necho \"reflection of alpha.bravo:     \", $method->invoke($alpha).PHP_EOL;\necho \"closure of alpha.bravo:        \", $closure().PHP_EOL;\necho \"call_user_func of closure:     \", call_user_func($closure).PHP_EOL;\necho PHP_EOL;\necho \"closure cl of c(alpha.bravo):  \", get_class($reflectionC->getClosureThis()).PHP_EOL;\necho \"scope cl of c(alpha.bravo):    \", $reflectionC->getClosureScopeClass()->getName().PHP_EOL;\necho \"reflection of c(alpha.bravo):  \", $reflectionC->invoke().PHP_EOL;\n?>")).toMatchSnapshot();
  });
});
