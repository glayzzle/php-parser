// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/constants_error_006.phpt
  it("Basic class support - attempting to modify a class constant by assignment", function () {
    expect(() => parser.parseCode("<?php\n  class aclass\n  {\n      const myConst = \"hello\";\n  }\n  echo \"\\nTrying to modify a class constant directly - should be parse error.\\n\";\n  aclass::myConst = \"no!!\";\n  var_dump(aclass::myConst);\n?>")).toThrowErrorMatchingSnapshot();
  });
});
