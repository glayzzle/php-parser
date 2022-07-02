// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/dynamic_call_non_static.phpt
  it("Dynamic static call of non-static method", function () {
    expect(parser.parseCode("<?php\nclass Foo {\n    function test1() {\n        $method = ['Foo', 'bar'];\n        $method();\n    }\n    function test2() {\n        $method = 'Foo::bar';\n        $method();\n    }\n    function __call($name, $args) {}\n}\n$x = new Foo;\ntry {\n    $x->test1();\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    $x->test2();\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
