// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/variadic/legal_variadic_override.phpt
  it("Cases where non-variadic parameters are allowed to be subsumed by a variadic one", function () {
    expect(parser.parseCode("<?php\nclass A {\n    public function test1($a, $b) {}\n    public function test2(int $a, int $b) {}\n    public function test3(int $a, int $b) {}\n    public function test4(int $a, string $b) {}\n    public function test5(&$a, &$b) {}\n}\nclass B extends A {\n    public function test1(...$args) {}\n    public function test2(...$args) {}\n    public function test3(int ...$args) {}\n    public function test4(int|string ...$args) {}\n    public function test5(&...$args) {}\n}\n?>\n===DONE==")).toMatchSnapshot();
  });
});
