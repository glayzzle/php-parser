// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug68446.phpt
  it("Bug #68446 (Array constant not accepted for array parameter default)", function () {
    expect(parser.parseCode("<?php\nconst FOO = [1];\nconst BAR = null;\nfunction a(array $a = FOO) {\n    var_dump($a);\n}\nfunction b(?array $b = BAR) {\n    var_dump($b);\n}\nb(null);\nb([]);\nb();\na([]);\na();\na(null);\n?>")).toMatchSnapshot();
  });
});
