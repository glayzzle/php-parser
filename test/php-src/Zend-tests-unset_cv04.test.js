// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/unset_cv04.phpt
  it("unset() CV 4 (unset() local variable in included file)", function () {
    expect(parser.parseCode("<?php\nfunction f() {\n  $x = \"ok\\n\";\n  echo $x;\n  include \"unset.inc\";\n  echo $x;\n}\nf();\n?>")).toMatchSnapshot();
  });
});
