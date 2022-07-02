// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/constants_error_003.phpt
  it("Basic class support - attempting to pass a class constant by reference.", function () {
    expect(parser.parseCode("<?php\n  class aclass\n  {\n      const myConst = \"hello\";\n  }\n  function f(&$a)\n  {\n      $a = \"changed\";\n  }\n  f(aclass::myConst);\n  var_dump(aclass::myConst);\n?>")).toMatchSnapshot();
  });
});
