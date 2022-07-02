// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/generators/finally/yield_throw.phpt
  it("try { yield } finally { throw }", function () {
    expect(parser.parseCode("<?php\nfunction foo($f, $t) {\n    for ($i = $f; $i <= $t; $i++) {\n        try {\n            yield $i;\n        } finally {\n            throw new Exception;\n        }\n    }\n}\nforeach (foo(1, 5) as $x) {\n    echo $x, \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
