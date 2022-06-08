// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug71980.phpt
  it("Bug #71980: Decorated/Nested Generator is Uncloseable in Finally", function () {
    expect(parser.parseCode("<?php\nclass Dtor {\n    public function __destruct() {\n        echo \"Dtor\\n\";\n    }\n}\nfunction gen1() {\n    try {\n        foreach ([42, new Dtor] as $value) {\n            yield $value;\n        }\n    } finally {\n        echo \"Finally\\n\";\n    }\n}\nfunction gen2() {\n    try {\n        var_dump(new Dtor, yield);\n    } finally {\n        echo \"Finally\\n\";\n    }\n}\n$gen = gen1();\n$gen->rewind();\nunset($gen);\n$gen = gen2();\n$gen->rewind();\nunset($gen);\n?>")).toMatchSnapshot();
  });
});
