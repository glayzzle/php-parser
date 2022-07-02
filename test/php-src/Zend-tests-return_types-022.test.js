// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/return_types/022.phpt
  it("Hint on closure with lexical vars", function () {
    expect(parser.parseCode("<?php\n$foo = \"bar\";\n$test = function() use($foo) : Closure {\n    return function() use ($foo) {\n        return $foo;\n    };\n};\n$callable = $test();\nvar_dump($callable());\n?>")).toMatchSnapshot();
  });
});
