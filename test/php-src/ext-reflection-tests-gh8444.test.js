// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/gh8444.phpt
  it("GH-8444 (Fix ReflectionProperty::__toString() of properties containing instantiated enums)", function () {
    expect(parser.parseCode("<?php\nenum Foo\n{\n    case Bar;\n}\nclass Bar\n{\n    public Foo $enum = Foo::Bar;\n    public $enumInArray = [Foo::Bar];\n}\necho new \\ReflectionProperty('Bar', 'enum'), \"\\n\";\necho new \\ReflectionProperty('Bar', 'enumInArray'), \"\\n\";\necho new \\ReflectionProperty(new Bar, 'enum'), \"\\n\";\necho new \\ReflectionProperty(new Bar, 'enumInArray'), \"\\n\";\n?>")).toMatchSnapshot();
  });
});
