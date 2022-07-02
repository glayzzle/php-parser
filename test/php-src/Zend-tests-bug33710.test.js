// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug33710.phpt
  it("Bug #33710 (ArrayAccess objects doesn't initialize $this)", function () {
    expect(parser.parseCode("<?php\nclass Foo implements ArrayAccess\n{\n    function offsetExists($offset): bool { return true;}\n    function offsetGet($offset): mixed { return null; }\n    function offsetSet($offset, $value): void {/*...*/}\n    function offsetUnset($offset): void {/*...*/}\n    function fail()\n    {\n        $this['blah'];\n    }\n    function succeed()\n    {\n        $this;\n        $this['blah'];\n    }\n}\n$bar = new Foo();\n$bar->succeed();\n$bar->fail();\n?>\n===DONE===")).toMatchSnapshot();
  });
});
