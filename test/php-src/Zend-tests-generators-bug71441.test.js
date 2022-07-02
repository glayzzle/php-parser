// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/generators/bug71441.phpt
  it("Bug #71441 (Typehinted Generator with return in try/finally crashes)", function () {
    expect(parser.parseCode("<?php\n$num = 2000; /* to be sure to be in wild memory */\n$add = str_repeat(\"1 +\", $num);\n$gen = (eval(<<<PHP\nreturn function (): \\Generator {\n    try {\n        \\$a = 1;\n        \\$foo = \\$a + $add \\$a;\n        return yield \\$foo;\n    } finally {\n        print \"Ok\\n\";\n    }\n};\nPHP\n))();\nvar_dump($gen->current());\n$gen->send(\"Success\");\nvar_dump($gen->getReturn());\n?>")).toMatchSnapshot();
  });
});
