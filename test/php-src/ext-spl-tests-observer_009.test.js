// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/observer_009.phpt
  it("SPL: SplObjectStorage addAll/removeAll", function () {
    expect(parser.parseCode("<?php\nclass Foo {}\n$storageA = new \\SplObjectStorage();\n$storageA->attach(new \\Foo);\n$storageA->attach(new \\Foo);\necho (\"Count storage A: \" . count($storageA));\nforeach ($storageA as $object) {\n        echo ' x ';\n}\necho \"\\n\";\n$storageB = clone $storageA;\necho (\"Count storage B: \" . count($storageB));\nforeach ($storageB as $object) {\n        echo ' x ';\n}\necho \"\\n\";\n?>")).toMatchSnapshot();
  });
});
