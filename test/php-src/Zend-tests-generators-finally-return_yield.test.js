// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/generators/finally/return_yield.phpt
  it("try { return } finally { yield }", function () {
    expect(parser.parseCode("<?php\nfunction foo($f, $t) {\n    for ($i = $f; $i <= $t; $i++) {\n        try {\n            return;\n        } finally {\n            yield $i;\n        }\n    }\n}\nforeach (foo(1, 5) as $x) {\n    echo $x, \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
