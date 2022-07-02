// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/enum/weak-map.phpt
  it("Use enum as WeakMap key", function () {
    expect(parser.parseCode("<?php\nenum TestEnum {\n    case A;\n}\n$map = new WeakMap();\n$map[TestEnum::A] = 'a string';\nvar_dump($map[TestEnum::A]);\nvar_dump($map[TestEnum::A]);\n?>")).toMatchSnapshot();
  });
});
