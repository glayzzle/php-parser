// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/func_get_args.002.phpt
  it("func_get_args with variable number of args", function () {
    expect(parser.parseCode("<?php\nfunction foo($a)\n{\n    var_dump(func_get_args());\n}\nfoo(1, 2, 3);\n?>")).toMatchSnapshot();
  });
});
