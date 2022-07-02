// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/readonly_props/serialization.phpt
  it("Serialization of readonly properties", function () {
    expect(parser.parseCode("<?php\nclass Test {\n    public function __construct(\n        public readonly int $prop = 1,\n    ) {}\n}\nvar_dump($s = serialize(new Test));\nvar_dump(unserialize($s));\n// Readonly properties receive no special handling.\n// What happens during unserialization stays in unserialization.\nvar_dump(unserialize(\"O:4:\\\"Test\\\":1:{s:4:\\\"prop\\\";i:2;}\"));\nvar_dump(unserialize(\"O:4:\\\"Test\\\":2:{s:4:\\\"prop\\\";i:2;s:4:\\\"prop\\\";i:3;}\"));\n?>")).toMatchSnapshot();
  });
});
