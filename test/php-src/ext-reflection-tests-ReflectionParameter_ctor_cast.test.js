// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionParameter_ctor_cast.phpt
  it("Test method name string cast in ReflectionParameter ctor", function () {
    expect(parser.parseCode("<?php\nclass A {}\ntry {\n    new ReflectionParameter([\n        A::class,\n        new class { public function __toString() { return 'method'; } }\n    ], 'param');\n} catch (ReflectionException $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
