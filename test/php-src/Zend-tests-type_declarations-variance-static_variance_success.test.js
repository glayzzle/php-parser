// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/variance/static_variance_success.phpt
  it("Success cases for static variance", function () {
    expect(parser.parseCode("<?php\nclass A {\n    public function test1(): self {}\n    public function test2(): B {}\n    public function test3(): object {}\n    public function test4(): X|Y|self {}\n    public function test5(): ?static {}\n}\nclass B extends A {\n    public function test1(): static {}\n    public function test2(): static {}\n    public function test3(): static {}\n    public function test4(): X|Y|static {}\n    public function test5(): static {}\n}\n?>\n===DONE===")).toMatchSnapshot();
  });
});
