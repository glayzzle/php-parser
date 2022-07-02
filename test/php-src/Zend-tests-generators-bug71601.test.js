// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/generators/bug71601.phpt
  it("Bug #71601 (finally block not executed after yield from)", function () {
    expect(parser.parseCode("<?php\nfunction gen1() {\n    try {\n        yield 1;\n        yield 2;\n        return true;\n    } finally {\n        echo \"Inner finally\\n\";\n    }\n}\nfunction gen2() {\n    try {\n        echo \"Entered try/catch\\n\";\n        var_dump(yield from gen1());\n    } finally {\n        echo \"Finally\\n\";\n    }\n}\n$generator = gen2();\nvar_dump($generator->current());\nunset($generator);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
