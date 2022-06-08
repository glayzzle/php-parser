// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/preload_loadable_classes_3.phpt
  it("Preloading: Loadable class checking (3)", function () {
    expect(parser.parseCode("<?php\nclass Foo {\n}\nvar_dump(new Test);\n?>")).toMatchSnapshot();
  });
});
