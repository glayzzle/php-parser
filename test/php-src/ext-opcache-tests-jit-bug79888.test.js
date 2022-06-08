// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/bug79888.phpt
  it("Bug #79888 (Incorrect execution with JIT enabled)", function () {
    expect(parser.parseCode("<?php\nfunction testPrime(int $a): bool {\n    if ($a < 2)  {\n        return false;\n    } else if ($a == 2) {\n        return true;\n    }\n    for ($j = 2; $j < $a; $j++) {\n        if (($a % $j) == 0) {\n            return false;\n        }\n    }\n    return true;\n}\n$max = 1000;\n$cnt = 0;\necho \"Testing Primes until: \" . $max . \"\\n\";\nfor ($i = 2; $i <= $max; $i++)\n{\n        if (testPrime($i)) $cnt++;\n}\necho \"Primect: {$cnt}\\n\";\n?>")).toMatchSnapshot();
  });
});
