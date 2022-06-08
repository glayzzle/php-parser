// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionClassConstant_getValue.phpt
  it("Test variations of getting constant values", function () {
    expect(parser.parseCode("<?php\n/* Use separate classes to make sure that in-place constant updates don't interfere */\nclass A {\n    const X = self::Y * 2;\n    const Y = 1;\n}\nclass B {\n    const X = self::Y * 2;\n    const Y = 1;\n}\nclass C {\n    const X = self::Y * 2;\n    const Y = 1;\n}\nvar_dump((new ReflectionClassConstant('A', 'X'))->getValue());\necho new ReflectionClassConstant('B', 'X');\necho new ReflectionClass('C');\n?>")).toMatchSnapshot();
  });
});
