// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/try/try_finally_021.phpt
  it("Live range & return from finally", function () {
    expect(parser.parseCode("<?php\n$array = [1];\nforeach ([0] as $_) {\n    foreach ($array as $v) {\n        try {\n            echo \"ok\\n\";\n            return;\n        } finally {\n            echo \"ok\\n\";\n            return;\n        }\n    }\n}\n?>")).toMatchSnapshot();
  });
});
