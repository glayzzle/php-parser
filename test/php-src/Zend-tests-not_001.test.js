// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/not_001.phpt
  it("bitwise NOT, doubles and strings", function () {
    expect(parser.parseCode("<?php\n$d = 23.67;\n$s = \"48484.22\";\n$s1 = \"test\";\n$s2 = \"some\";\n$s = ~$d;\nvar_dump($s);\n$s1 = ~$s2;\nvar_dump(bin2hex($s1));\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
