// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/func_get_arg.002.phpt
  it("func_get_arg with variable number of args", function () {
    expect(parser.parseCode("<?php\nfunction foo($a)\n{\n    $b = func_get_arg(1);\n    var_dump($b);\n    $b++;\n    var_dump(func_get_arg(1));\n}\nfoo(2, 3);\necho \"\\n\";\n?>")).toMatchSnapshot();
  });
});
