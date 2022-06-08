// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/inter_03.phpt
  it("Testing interface constants with inheritance", function () {
    expect(parser.parseCode("<?php\ninterface a {\n    const b = 2;\n}\ninterface b extends a {\n    const c = self::b;\n}\nvar_dump(b::c, a::b);\n?>")).toMatchSnapshot();
  });
});
