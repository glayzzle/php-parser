// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/loop_free_on_return.phpt
  it("Break out of while loop that is followed by a return statement and inside a foreach loop", function () {
    expect(parser.parseCode("<?php\n$a = [42];\nforeach ($a as $b) {\n    while (1) {\n        break 2;\n    }\n    return;\n}\n?>\n===DONE===")).toMatchSnapshot();
  });
});
