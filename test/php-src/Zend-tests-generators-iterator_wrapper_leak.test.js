// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/generators/iterator_wrapper_leak.phpt
  it("A generator iterator wrapper involved in a cycle should not leak", function () {
    expect(parser.parseCode("<?php\nclass Test {\n    public function method() {\n        $this->gen1 = (function () {\n            yield 1;\n            yield 2;\n            yield 3;\n        })();\n        $gen2 = function() {\n            foreach ($this->gen1 as $x) {\n                echo \"$x\\n\";\n                yield $x;\n            }\n        };\n        $this->gen2 = $gen2();\n        foreach ($this->gen2 as $x) {\n            if ($x == 2) {\n                break;\n            }\n        }\n    }\n}\n(new Test)->method();\ngc_collect_cycles();\n?>")).toMatchSnapshot();
  });
});
