// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/type_hinting_002.phpt
  it("ZE2 class type hinting non existing class", function () {
    expect(parser.parseCode("<?php\nclass Foo {\n    function a(NonExisting $foo) {}\n}\n$o = new Foo;\n$o->a($o);\n?>")).toMatchSnapshot();
  });
});
