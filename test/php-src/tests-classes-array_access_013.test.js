// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/array_access_013.phpt
  it("ZE2 ArrayAccess and exceptions", function () {
    expect(parser.parseCode("<?php\nclass Test implements ArrayAccess\n{\n        public function offsetExists($offset): bool      { throw new Exception(__METHOD__); return false; }\n        public function offsetGet($offset): mixed         { throw new Exception(__METHOD__); return $offset; }\n        public function offsetSet($offset, $data ): void { throw new Exception(__METHOD__); }\n        public function offsetUnset($offset): void       { throw new Exception(__METHOD__); }\n}\n$t = new Test;\ntry\n{\n    echo isset($t[0]);\n}\ncatch(Exception $e)\n{\n    echo \"Caught in \" . $e->getMessage() . \"()\\n\";\n}\ntry\n{\n    echo $t[0];\n}\ncatch(Exception $e)\n{\n    echo \"Caught in \" . $e->getMessage() . \"()\\n\";\n}\ntry\n{\n    $t[0] = 1;\n}\ncatch(Exception $e)\n{\n    echo \"Caught in \" . $e->getMessage() . \"()\\n\";\n}\ntry\n{\n    unset($t[0]);\n}\ncatch(Exception $e)\n{\n    echo \"Caught in \" . $e->getMessage() . \"()\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
