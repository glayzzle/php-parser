// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug64979.phpt
  it("Bug #64979 (Wrong behavior of static variables in closure generators)", function () {
    expect(parser.parseCode("<?php\nfunction new_closure_gen() {\n    return function() {\n        static $foo = 0;\n        yield ++$foo;\n    };\n}\n$closure1 = new_closure_gen();\n$closure2 = new_closure_gen();\n$gen1 = $closure1();\n$gen2 = $closure1();\n$gen3 = $closure2();\nforeach (array($gen1, $gen2, $gen3) as $gen) {\n    foreach ($gen as $val) {\n        var_dump($val);\n    }\n}\n?>")).toMatchSnapshot();
  });
});
