// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionMethod_getDocComment_property_list.phpt
  it("ReflectionMethod::getDocComment()", function () {
    expect(parser.parseCode("<?php\nclass X {\n    /**\n     * doc 1\n     */\n    // Some comment\n    public\n        $x = \"x\",\n        $y = 'y',\n        /** doc 2 */\n        $z = 'z'\n    ;\n}\n$reflection = new ReflectionProperty('\\X', 'x');\necho 'X::x', PHP_EOL;\nvar_dump($reflection->getDocComment());\n$reflection = new ReflectionProperty('\\X', 'y');\necho 'X::y', PHP_EOL;\nvar_dump($reflection->getDocComment());\n$reflection = new ReflectionProperty('\\X', 'z');\necho 'X::z', PHP_EOL;\nvar_dump($reflection->getDocComment());\n?>")).toMatchSnapshot();
  });
});
