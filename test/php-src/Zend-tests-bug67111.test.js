// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug67111.phpt
  it("Bug #67111: Memory leak when using \"continue 2\" inside two foreach loops", function () {
    expect(parser.parseCode("<?php\n$array1 = [1, 2, 3];\n$array2 = [1, 2, 3];\nforeach ($array1 as $x) {\n    foreach ($array2 as $y) {\n        echo \"$x.$y\\n\";\n        continue 2;\n    }\n}\n?>")).toMatchSnapshot();
  });
});
