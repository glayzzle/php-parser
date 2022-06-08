// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/variance/trait_error.phpt
  it("Trait delayed variance check fails", function () {
    expect(parser.parseCode("<?php\n// Taken from bug #78989.\nclass X {\n    function method($a): A {}\n}\ntrait T {\n    function method($r): B {}\n}\nclass U extends X {\n    use T;\n}\n?>")).toMatchSnapshot();
  });
});
