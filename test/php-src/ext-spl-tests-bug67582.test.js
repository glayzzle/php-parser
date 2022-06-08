// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug67582.phpt
  it("Bug #67582: Cloned SplObjectStorage with overwritten getHash fails offsetExists()", function () {
    expect(parser.parseCode("<?php\nclass MyObjectStorage extends SplObjectStorage {\n    // Overwrite getHash() with just some (working) test-method\n    public function getHash($object): string { return get_class($object); }\n}\nclass TestObject {}\n$list = new MyObjectStorage();\n$list->attach(new TestObject());\nforeach($list as $x) var_dump($list->offsetExists($x));\n$list2 = clone $list;\nforeach($list2 as $x) var_dump($list2->offsetExists($x));\n?>")).toMatchSnapshot();
  });
});
