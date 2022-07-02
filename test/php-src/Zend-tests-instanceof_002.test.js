// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/instanceof_002.phpt
  it("Testing instanceof operator with class and interface inheriteds", function () {
    expect(parser.parseCode("<?php\ninterface ITest {\n}\ninterface IFoo extends ITest {\n}\nclass foo extends stdClass implements ITest {\n}\nvar_dump(new foo instanceof stdClass);\nvar_dump(new foo instanceof ITest);\nvar_dump(new foo instanceof IFoo);\nclass bar extends foo implements IFoo {\n}\nvar_dump(new bar instanceof stdClass);\nvar_dump(new bar instanceof ITest);\nvar_dump(new bar instanceof IFoo);\n?>")).toMatchSnapshot();
  });
});
