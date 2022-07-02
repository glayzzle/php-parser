// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug72944.phpt
  it("Bug #72944 (Null pointer deref in zval_delref_p).", function () {
    expect(parser.parseCode("<?php\ndefine('e', 'e');\n(\"a\"== e & $A = $A? 0 : 0) ?:0;\necho \"OK\\n\";\n?>")).toMatchSnapshot();
  });
});
