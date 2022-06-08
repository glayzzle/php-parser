// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/assign_027.phpt
  it("JIT ASSIGN: 027", function () {
    expect(parser.parseCode("<?php\nfunction foo() {\n  $persons = 2;\n  for ($i=0; $i<$persons; $i++) {\n    $children = 2;\n  }\n}\nfoo();\necho \"ok\\n\";\n?>")).toMatchSnapshot();
  });
});
