// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/preload_loadable_classes_2.phpt
  it("Preloading: Loadable class checking (2)", function () {
    expect(parser.parseCode("<?php\nconst UNDEF = 1;\nclass Foo {\n    const UNDEF = 2;\n}\nvar_dump(class_exists(\"Test\"));\nvar_dump(Test::X);\nvar_dump(Test::Y);")).toMatchSnapshot();
  });
});
