// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/return_types/043.phpt
  it("Some magic methods can declare mixed return type", function () {
    expect(parser.parseCode("<?php\nclass Foo {\n    public function __get($name): bool {}\n    public function __call($name, $args): string {}\n    public static function __callStatic($name, $args): self {}\n    public function __invoke(): self {}\n}\nclass Bar {\n    public function __get($name): string|array {}\n    public function __call($name, $args): int|float {}\n    public static function __callStatic($name, $args): ?object {}\n    public function __invoke(): Foo|int {}\n}\nclass Baz {\n    public function __get($name): mixed {}\n    public function __call($name, $args): mixed {}\n    public static function __callStatic($name, $args): mixed {}\n    public function __invoke(): mixed {}\n}\necho 'Okay!';\n?>")).toMatchSnapshot();
  });
});
