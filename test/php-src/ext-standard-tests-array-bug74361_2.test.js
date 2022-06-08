// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/bug74361_2.phpt
  it("Bug #74361: Compaction in array_rand() violates COW (variation)", function () {
    expect(parser.parseCode("<?php\n$array = range(0, 15);\nfor ($i = 0; $i <= 8; $i++) {\n    unset($array[$i]);\n}\nforeach ($array as $x) {\n    var_dump($x);\n    array_rand($array, 1);\n}\n?>")).toMatchSnapshot();
  });
});
