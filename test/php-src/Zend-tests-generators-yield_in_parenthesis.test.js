// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/generators/yield_in_parenthesis.phpt
  it("No additional parenthesis are required around yield if they are already present", function () {
    expect(parser.parseCode("<?php\nfunction gen() {\n    if (yield $foo); elseif (yield $foo);\n    if (yield $foo): elseif (yield $foo): endif;\n    while (yield $foo);\n    do {} while (yield $foo);\n    switch (yield $foo) {}\n    (yield $foo);\n    die(yield $foo);\n    func(yield $foo);\n    $foo->func(yield $foo);\n    new Foo(yield $foo);\n}\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
