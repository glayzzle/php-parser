// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug44913.phpt
  it("Bug #44913 (Segfault when using return in combination with nested loops and continue 2)", function () {
    expect(parser.parseCode("<?php\nfunction something() {\n        foreach(array(1, 2) as $value) {\n                for($i = 0; $i < 1; $i++) {\n                        continue 2;\n                }\n                return;\n        }\n}\nsomething();\necho \"ok\\n\";\n?>")).toMatchSnapshot();
  });
});
