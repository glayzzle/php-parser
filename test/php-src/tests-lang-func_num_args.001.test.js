// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/func_num_args.001.phpt
  it("func_num_args with no args", function () {
    expect(parser.parseCode("<?php\nfunction foo()\n{\n    var_dump(func_num_args());\n}\nfoo();\n?>")).toMatchSnapshot();
  });
});
