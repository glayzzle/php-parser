// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/constants_error_007.phpt
  it("Basic class support - attempting to create a reference to a class constant", function () {
    expect(() => parser.parseCode("<?php\n  class aclass\n  {\n      const myConst = \"hello\";\n  }\n  echo \"\\nAttempting to create a reference to a class constant - should be parse error.\\n\";\n  $a = &aclass::myConst;\n?>")).toThrowErrorMatchingSnapshot();
  });
});
