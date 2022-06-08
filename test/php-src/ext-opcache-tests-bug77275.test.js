// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/bug77275.phpt
  it("Bug #77275: OPcache optimization problem for ArrayAccess->offsetGet(string)", function () {
    expect(parser.parseCode("<?php\nnamespace Foo;\nclass Bar { public function get() {} }\nclass Record implements \\ArrayAccess {\n    public function offsetSet($offset, $value): void { throw new \\Exception; }\n    public function offsetGet($offset): mixed { var_dump($offset); return null; }\n    public function offsetExists($offset): bool { throw new \\Exception; }\n    public function offsetUnset($offset): void { throw new \\Exception; }\n}\nclass Baz {\n    public function run() {\n        $a = pow(1, 2);\n        $b = new Bar();\n        $c = new Bar();\n        $d = new Bar();\n        $id = $b->get('a', 'b', 'c');\n        $rec = new Record();\n        $id = $rec['a'];\n    }\n}\n(new Baz())->run();\n?>")).toMatchSnapshot();
  });
});
