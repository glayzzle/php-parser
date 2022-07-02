// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/enum/serialization-round-trip.phpt
  it("Enum unserialize same instance", function () {
    expect(parser.parseCode("<?php\nenum Foo {\n    case Bar;\n}\nvar_dump(Foo::Bar === unserialize(serialize(Foo::Bar)));\n?>")).toMatchSnapshot();
  });
});
