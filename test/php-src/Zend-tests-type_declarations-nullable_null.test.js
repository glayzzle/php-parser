// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/nullable_null.phpt
  it("nullable class", function () {
    expect(parser.parseCode("<?php\nfunction test(Foo $a = null) {\n    echo \"ok\\n\";\n}\ntest(null);\n?>")).toMatchSnapshot();
  });
});
