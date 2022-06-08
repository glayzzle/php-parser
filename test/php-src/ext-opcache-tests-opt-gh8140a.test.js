// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/opt/gh8140a.phpt
  it("GH-8140 (Wrong first class callable by name optimization)", function () {
    expect(parser.parseCode("<?php\nnamespace Test;\nfunction greeter(string $name) {\n  echo \"Hello, ${name}!\";\n}\n$mycallable = greeter(...);\n$mycallable(\"world\");\n?>")).toMatchSnapshot();
  });
});
