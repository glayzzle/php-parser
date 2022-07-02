// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug60611.phpt
  it("Bug #60611 (Segmentation fault with Cls::{expr}() syntax)", function () {
    expect(parser.parseCode("<?php\nclass Cls {\n    function __call($name, $arg) {\n    }\n    static function __callStatic($name, $arg) {\n    }\n}\n$cls = new Cls;\n$cls->{0}();\n$cls->{1.0}();\n$cls->{true}();\n$cls->{false}();\n$cls->{null}();\nCls::{0}();\nCls::{1.0}();\nCls::{true}();\nCls::{false}();\nCls::{null}();\n?>")).toMatchSnapshot();
  });
});
