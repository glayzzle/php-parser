// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/generators/finally/yield_return.phpt
  it("try { yield } finally { return }", function () {
    expect(parser.parseCode("<?php\nfunction foo($f, $t) {\n    for ($i = $f; $i <= $t; $i++) {\n        try {\n            yield $i;\n        } finally {\n            return;\n        }\n    }\n}\nforeach (foo(1, 5) as $x) {\n    echo $x, \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
