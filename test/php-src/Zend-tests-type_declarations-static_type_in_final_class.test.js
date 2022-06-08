// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/static_type_in_final_class.phpt
  it("While it may not be very useful, static is also permitted in final classes", function () {
    expect(parser.parseCode("<?php\nfinal class Test {\n    public static function create(): static {\n        return new static;\n    }\n}\nvar_dump(Test::create());\n?>")).toMatchSnapshot();
  });
});
