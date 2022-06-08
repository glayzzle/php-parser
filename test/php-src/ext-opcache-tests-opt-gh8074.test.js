// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/opt/gh8074.phpt
  it("GH-8074 (Wrong type inference of range() result)", function () {
    expect(parser.parseCode("<?php\nfunction test() {\n    $array = range(1, \"2\");\n    foreach ($array as $i) {\n        var_dump($i + 1);\n    }\n}\ntest();\n?>")).toMatchSnapshot();
  });
});
