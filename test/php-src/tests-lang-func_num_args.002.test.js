// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/func_num_args.002.phpt
  it("func_num_args with variable number of args", function () {
    expect(parser.parseCode("<?php\nfunction foo($a)\n{\n    var_dump(func_num_args());\n}\nfoo(1, 2, 3);\n?>")).toMatchSnapshot();
  });
});
