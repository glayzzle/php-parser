// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/serializable_deprecation.phpt
  it("Serializable deprecation", function () {
    expect(parser.parseCode("<?php\ninterface I extends Serializable {}\nabstract class A implements Serializable {}\nclass C extends A implements I {\n    public function serialize(): string {}\n    public function unserialize(string $data) {}\n}\nclass D extends A implements I {\n    public function serialize(): string {}\n    public function unserialize(string $data) {}\n    public function __serialize(): array {}\n    public function __unserialize(array $data) {}\n}\n?>")).toMatchSnapshot();
  });
});
