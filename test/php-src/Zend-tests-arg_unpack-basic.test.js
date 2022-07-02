// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/arg_unpack/basic.phpt
  it("Basic argument unpacking", function () {
    expect(parser.parseCode("<?php\nfunction test(...$args) {\n    var_dump($args);\n}\nfunction test2($arg1, $arg2, $arg3 = null) {\n    var_dump($arg1, $arg2, $arg3);\n}\nfunction getArray($array) {\n    return $array;\n}\nfunction arrayGen($array) {\n    foreach ($array as $element) {\n        yield $element;\n    }\n}\n$array = [1, 2, 3];\ntest(...[]);\ntest(...[1, 2, 3]);\ntest(...$array);\ntest(...getArray([1, 2, 3]));\ntest(...arrayGen([]));\ntest(...arrayGen([1, 2, 3]));\ntest(1, ...[2, 3], ...[4, 5]);\ntest(1, ...getArray([2, 3]), ...arrayGen([4, 5]));\ntest2(...[1, 2]);\ntest2(...[1, 2, 3]);\ntest2(...[1], ...[], ...[], ...[2, 3], ...[4, 5]);\n?>")).toMatchSnapshot();
  });
});
