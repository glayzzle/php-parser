// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/dynamic_call_to_ref_returning_function.phpt
  it("When performing a dynamic call to a ret-by-ref function, the reference should be unwrapped", function () {
    expect(parser.parseCode("<?php\nnamespace Foo;\nfunction &retRef($x) {\n    return $x;\n}\nvar_dump(call_user_func('Foo\\retRef', 42));\nvar_dump(call_user_func_array('Foo\\retRef', [42]));\n$closure = function &($x) {\n    return $x;\n};\nvar_dump($closure->call(new class {}, 42));\nvar_dump((new \\ReflectionFunction('Foo\\retRef'))->invoke(42));\nvar_dump((new \\ReflectionFunction('Foo\\retRef'))->invokeArgs([42]));\nclass Bar {\n    function &method($x) {\n        return $x;\n    }\n}\nvar_dump((new \\ReflectionMethod('Foo\\Bar', 'method'))->invoke(new Bar, 42));\nvar_dump((new \\ReflectionMethod('Foo\\Bar', 'method'))->invokeArgs(new Bar, [42]));\n?>")).toMatchSnapshot();
  });
});
