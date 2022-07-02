// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/enum/no-implement-serializable.phpt
  it("Enum must not implement Serializable", function () {
    expect(parser.parseCode("<?php\nenum Foo implements Serializable {\n    case Bar;\n    public function serialize() {\n        return serialize('Hello');\n    }\n    public function unserialize($data) {\n        return unserialize($data);\n    }\n}\nvar_dump(unserialize(serialize(Foo::Bar)));\n?>")).toMatchSnapshot();
  });
});
