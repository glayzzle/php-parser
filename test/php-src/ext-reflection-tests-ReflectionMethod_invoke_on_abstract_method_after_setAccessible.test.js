// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionMethod_invoke_on_abstract_method_after_setAccessible.phpt
  it("ReflectionMethod::invoke() on an abstract method should fail", function () {
    expect(parser.parseCode("<?php\nabstract class Test {\n    abstract static function foo();\n}\n$rm = new ReflectionMethod('Test', 'foo');\ntry {\n    var_dump($rm->invoke(null));\n} catch (ReflectionException $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
