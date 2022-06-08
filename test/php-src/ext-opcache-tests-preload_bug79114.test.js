// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/preload_bug79114.phpt
  it("Bug #79114 (Eval class during preload causes class to be only half available)", function () {
    expect(parser.parseCode("<?php\nvar_dump(class_exists(Foo::class));\nvar_dump(class_exists(Bar::class));\nnew Bar();\nvar_dump(class_parents('Bar'));\nnew Foo();\nf3();\n?>")).toMatchSnapshot();
  });
});
