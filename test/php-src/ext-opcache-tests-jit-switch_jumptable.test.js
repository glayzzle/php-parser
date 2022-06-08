// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/switch_jumptable.phpt
  it("Switch jumptable generation", function () {
    expect(parser.parseCode("<?php\nfunction test1(string $val) {\n    switch ($val) {\n        case 'str1':\n        case 'str2':\n            echo \"correct\\n\";\n            return;\n    }\n    echo \"wrong\\n\";\n}\nfunction test2(int $val) {\n    switch ($val) {\n        case 1:\n        case 2:\n        case 3:\n        case 4:\n        case 5:\n            echo \"correct\\n\";\n            return;\n    }\n    echo \"wrong\\n\";\n}\ntest1(\"str1\");\ntest2(1);\n?>")).toMatchSnapshot();
  });
});
