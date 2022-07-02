// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/enum/spl-object-storage.phpt
  it("Enum in SplObjectStorage", function () {
    expect(parser.parseCode("<?php\nenum Foo {\n    case Bar;\n    case Baz;\n    case Qux;\n}\n$storage = new SplObjectStorage();\n$storage[Foo::Bar] = 'Bar';\n$storage[Foo::Baz] = 'Baz';\nvar_dump($storage[Foo::Bar]);\nvar_dump($storage[Foo::Baz]);\nvar_dump($storage->contains(Foo::Bar));\nvar_dump($storage->contains(Foo::Qux));\n$serialized = serialize($storage);\nvar_dump($serialized);\n$unserialized = unserialize($serialized);\nvar_dump($unserialized[Foo::Bar]);\nvar_dump($unserialized[Foo::Baz]);\n?>")).toMatchSnapshot();
  });
});
