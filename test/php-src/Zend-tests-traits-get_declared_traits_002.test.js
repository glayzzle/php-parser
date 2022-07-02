// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/traits/get_declared_traits_002.phpt
  it("Testing get_declared_traits() inside namespace", function () {
    expect(parser.parseCode("<?php\nnamespace test {\n    class a { }\n    interface b { }\n    trait c { }\n    abstract class d { }\n    final class e { }\n    var_dump(get_declared_traits());\n}\n?>")).toMatchSnapshot();
  });
});
