// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/bug48757.phpt
  it("Bug #48757 (ReflectionFunction::invoke() parameter issues)", function () {
    expect(parser.parseCode("<?php\nfunction test() {\n    echo \"Hello World\\n\";\n}\nfunction another_test($parameter) {\n    var_dump($parameter);\n}\n$func = new ReflectionFunction('test');\n$func->invoke();\n$func = new ReflectionFunction('another_test');\n$func->invoke('testing');\n?>")).toMatchSnapshot();
  });
});
