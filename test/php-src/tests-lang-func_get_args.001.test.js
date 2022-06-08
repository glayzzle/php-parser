// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/func_get_args.001.phpt
  it("func_get_args with no args", function () {
    expect(parser.parseCode("<?php\nfunction foo()\n{\n    var_dump(func_get_args());\n}\nfoo();\n?>")).toMatchSnapshot();
  });
});
