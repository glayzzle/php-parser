// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/dynamic_call_008.phpt
  it("Don't optimize dynamic call to non-dynamic one if it drops the warning", function () {
    expect(parser.parseCode("<?php\nfunction test() {\n    try {\n        ((string) 'extract')(['a' => 42]);\n    } catch (\\Error $e) {\n        echo $e->getMessage() . \"\\n\";\n    }\n}\ntest();\n?>")).toMatchSnapshot();
  });
});
