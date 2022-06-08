// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/ns_056.phpt
  it("056: type-hint compatibility in namespaces", function () {
    expect(parser.parseCode("<?php\nnamespace test\\ns1;\nuse \\SplObserver;\nclass Foo implements SplObserver {\n    function update(\\SplSubject $x): void {\n        echo \"ok\\n\";\n    }\n}\nclass Bar implements \\SplSubject {\n    function attach(SplObserver $x): void {\n        echo \"ok\\n\";\n    }\n    function notify(): void {\n    }\n    function detach(SplObserver $x): void {\n    }\n}\n$foo = new Foo();\n$bar = new Bar();\n$bar->attach($foo);\n$foo->update($bar);\n?>")).toMatchSnapshot();
  });
});
