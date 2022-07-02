// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/closure_016.phpt
  it("Closure 016: closures and is_callable()", function () {
    expect(parser.parseCode("<?php\nclass Foo {\n    function __invoke() {\n        echo \"Hello World!\\n\";\n    }\n}\nfunction foo() {\n    return function() {\n        echo \"Hello World!\\n\";\n    };\n}\n$test = new Foo;\nvar_dump(is_callable($test, true, $name));\necho $name.\"\\n\";\nvar_dump(is_callable($test, false, $name));\necho $name.\"\\n\";\nvar_dump(is_callable(array($test,\"__invoke\"), true, $name));\necho $name.\"\\n\";\nvar_dump(is_callable(array($test,\"__invoke\"), false, $name));\necho $name.\"\\n\";\n$test = foo();\nvar_dump(is_callable($test, true, $name));\necho $name.\"\\n\";\nvar_dump(is_callable($test, false, $name));\necho $name.\"\\n\";\nvar_dump(is_callable(array($test,\"__invoke\"), true, $name));\necho $name.\"\\n\";\nvar_dump(is_callable(array($test,\"__invoke\"), false, $name));\necho $name.\"\\n\";\n?>")).toMatchSnapshot();
  });
});
