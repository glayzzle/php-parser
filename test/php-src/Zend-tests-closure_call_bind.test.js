// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/closure_call_bind.phpt
  it("Calling bindTo() on __call() closure", function () {
    expect(parser.parseCode("<?php\nclass Foo {\n    function __call($name, $args) {\n        echo \"__call($name)\\n\";\n    }\n}\n$foo = new Foo;\n$name = \"foo\";\nClosure::fromCallable([$foo, $name . \"bar\"])->bindTo(new Foo)();\n$foo->{$name . \"bar\"}(...)->bindTo(new Foo)();\n?>")).toMatchSnapshot();
  });
});
