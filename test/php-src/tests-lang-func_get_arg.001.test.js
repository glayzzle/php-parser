// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/func_get_arg.001.phpt
  it("func_get_arg test (PHP7)", function () {
    expect(parser.parseCode("<?php\nfunction foo($a)\n{\n   $a=5;\n   echo func_get_arg(0);\n}\nfoo(2);\necho \"\\n\";\n?>")).toMatchSnapshot();
  });
});
