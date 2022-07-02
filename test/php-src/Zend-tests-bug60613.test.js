// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug60613.phpt
  it("Bug #60613 (Segmentation fault with $cls->{expr}() syntax)", function () {
    expect(parser.parseCode("<?php\nclass Cls {\n    function __call($name, $arg) {\n    }\n}\n$cls = new Cls();\n$cls->{0}();\n$cls->{1.0}();\n$cls->{true}();\n$cls->{false}();\n$cls->{null}();\necho \"ok\\n\";\n?>")).toMatchSnapshot();
  });
});
