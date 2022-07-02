// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/class_object/forward_static_call_002.phpt
  it("forward_static_call() from outside of a class method.", function () {
    expect(parser.parseCode("<?php\nclass A\n{\n    public static function test() {\n        echo \"A\\n\";\n    }\n}\nfunction test() {\n    forward_static_call(array('A', 'test'));\n}\ntest();\n?>")).toMatchSnapshot();
  });
});
