// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/class_constants_006.phpt
  it("Ownership of constant expression inhereted from interface should be transfered to class", function () {
    expect(parser.parseCode("<?php\ninterface I {\n    const X2 = 'X' . self::Y2;\n    const Y2 = 'Y';\n}\neval('class B implements I{}');\nvar_dump(B::X2);\n?>")).toMatchSnapshot();
  });
});
