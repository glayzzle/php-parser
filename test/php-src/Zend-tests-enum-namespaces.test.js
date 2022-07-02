// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/enum/namespaces.phpt
  it("Enum namespace", function () {
    expect(parser.parseCode("<?php\nnamespace Foo {\n    enum Bar {\n        case Baz;\n        public function dump() {\n            var_dump(Bar::Baz);\n        }\n    }\n    function dumpBar() {\n        Bar::Baz->dump();\n    }\n}\nnamespace {\n    use Foo\\Bar;\n    \\Foo\\dumpBar();\n    \\Foo\\Bar::Baz->dump();\n    Bar::Baz->dump();\n}\n?>")).toMatchSnapshot();
  });
});
