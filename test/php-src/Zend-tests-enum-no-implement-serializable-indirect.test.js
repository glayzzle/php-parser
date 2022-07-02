// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/enum/no-implement-serializable-indirect.phpt
  it("Enum must not implement Serializable indirectly", function () {
    expect(parser.parseCode("<?php\ninterface MySerializable extends Serializable {}\nenum Foo implements MySerializable {\n    case Bar;\n    public function serialize() {\n        return serialize('Hello');\n    }\n    public function unserialize($data) {\n        return unserialize($data);\n    }\n}\nvar_dump(unserialize(serialize(Foo::Bar)));\n?>")).toMatchSnapshot();
  });
});
