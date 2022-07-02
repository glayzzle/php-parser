// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/generators/finally/throw_yield.phpt
  it("try { throw } finally { yield }", function () {
    expect(parser.parseCode("<?php\nfunction foo($f, $t) {\n    for ($i = $f; $i <= $t; $i++) {\n        try {\n            throw new Exception;\n        } finally {\n            yield $i;\n        }\n    }\n}\nforeach (foo(1, 5) as $x) {\n    echo $x, \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
