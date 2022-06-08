// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/return_types/042.phpt
  it("__debugInfo can declare union return type", function () {
    expect(parser.parseCode("<?php\nclass UnionType {\n    public function __debugInfo(): array|null {}\n}\nclass UnionType2 {\n    public function __debugInfo(): null|array {}\n}\nclass UnionTypeOldStyle {\n    public function __debugInfo(): ?array {}\n}\nclass JustAnArray {\n    public function __debugInfo(): array {}\n}\necho 'No problems!';\n?>")).toMatchSnapshot();
  });
});
