// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug73423.phpt
  it("Bug #73423 (Reproducible crash with GDB backtrace)", function () {
    expect(parser.parseCode("<?php\nclass foo implements \\RecursiveIterator\n  {\n    public $foo = [];\n    public Function current(): mixed\n      {\n        return current ($this->foo);\n      }\n    public Function key(): mixed\n      {\n        return key ($this->foo);\n      }\n    public Function next(): void\n      {\n        next ($this->foo);\n      }\n    public Function rewind(): void\n      {\n        reset ($this->foo);\n      }\n    public Function valid(): bool\n      {\n        return current ($this->foo) !== false;\n      }\n    public Function getChildren(): ?RecursiveIterator\n      {\n        return current ($this->foo);\n      }\n    public Function hasChildren(): bool\n      {\n        return (bool) count($this->foo);\n      }\n  }\nclass fooIterator extends \\RecursiveFilterIterator\n  {\n    public Function __destruct ()\n      {\n        eval(\"class A extends NotExists {}\");\n        /* CRASH */\n      }\n    public Function accept(): bool\n      {\n        return true;\n      }\n  }\n$foo = new foo ();\n$foo->foo[] = new foo ();\nforeach (new \\RecursiveIteratorIterator (new fooIterator ($foo)) as $bar) ;\n?>")).toMatchSnapshot();
  });
});
