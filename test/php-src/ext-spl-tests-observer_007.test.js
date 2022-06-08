// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/observer_007.phpt
  it("SPL: SplObjectStorage comapred with ==", function () {
    expect(parser.parseCode("<?php\n$a = new SplObjectStorage;\n$b = new SplObjectStorage;\nvar_dump($a == $b);\n$b[$b] = 2;\nvar_dump($a == $b);\n$a[$b] = 2;\nvar_dump($a == $b);\n$a[$b] = 3;\nvar_dump($a == $b);\n?>")).toMatchSnapshot();
  });
});
