// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/named_params/__invoke.phpt
  it("Check that __invoke() works with named parameters", function () {
    expect(parser.parseCode("<?php\nclass Test {\n    public function __invoke($a = 'a', $b = 'b') {\n        echo \"a: $a, b: $b\\n\";\n    }\n}\nclass Test2 {\n    public function __invoke($a = 'a', $b = 'b', ...$rest) {\n        echo \"a: $a, b: $b\\n\";\n        var_dump($rest);\n    }\n}\n$test = new Test;\n$test(b: 'B', a: 'A');\n$test(b: 'B');\ntry {\n    $test(b: 'B', c: 'C');\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\necho \"\\n\";\n$test2 = new Test2;\n$test2(b: 'B', a: 'A', c: 'C');\n$test2(b: 'B', c: 'C');\necho \"\\n\";\n$test3 = function($a = 'a', $b = 'b') {\n    echo \"a: $a, b: $b\\n\";\n};\n$test3(b: 'B', a: 'A');\n$test3(b: 'B');\ntry {\n    $test3(b: 'B', c: 'C');\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
