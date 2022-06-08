// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/return_types/generators001.phpt
  it("Valid generator return types", function () {
    expect(parser.parseCode("<?php\nfunction test1() : Generator {\n    yield 1;\n}\nfunction test2() : Iterator {\n    yield 2;\n}\nfunction test3() : Traversable {\n    yield 3;\n}\nfunction test4() : mixed {\n    yield 4;\n}\nfunction test5() : object {\n    yield 5;\n}\nfunction test6() : object|callable {\n    yield 6;\n}\nvar_dump(\n    test1(),\n    test2(),\n    test3(),\n    test4(),\n    test5(),\n    test6(),\n);\n?>")).toMatchSnapshot();
  });
});
