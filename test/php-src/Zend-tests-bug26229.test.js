// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug26229.phpt
  it("Bug #26229 (getIterator() segfaults when it returns arrays or scalars)", function () {
    expect(parser.parseCode("<?php\nclass array_iterator implements IteratorAggregate {\n        #[ReturnTypeWillChange]\n        public function getIterator() {\n                return array('foo', 'bar');\n        }\n}\n$obj = new array_iterator;\ntry\n{\n    foreach ($obj as $property => $value)\n    {\n        var_dump($value);\n    }\n}\ncatch(Exception $e)\n{\n    echo $e->getMessage() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
