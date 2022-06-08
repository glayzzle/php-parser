// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/preload_loadable_classes_1.phpt
  it("Preloading: Loadable class checking (1)", function () {
    expect(parser.parseCode("<?php\nvar_dump(class_exists('Test'));\nvar_dump(class_exists('Bar'));\nvar_dump(class_exists('Foo'));\n?>")).toMatchSnapshot();
  });
});
