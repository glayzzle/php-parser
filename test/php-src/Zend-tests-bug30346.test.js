// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug30346.phpt
  it("Bug #30346 (arrayAccess and using $this)", function () {
    expect(parser.parseCode("<?php\nclass Test implements ArrayAccess\n{\n        public function __construct() { }\n        public function offsetExists( $offset ): bool { return false; }\n        public function offsetGet( $offset ): mixed { return $offset; }\n        public function offsetSet( $offset, $data ): void { }\n        public function offsetUnset( $offset ): void { }\n}\n$post = new Test;\n$id = 'page';\necho $post[$id.'_show'];\necho \"\\n\";\n?>")).toMatchSnapshot();
  });
});
