// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/bug30856.phpt
  it("Reflection Bug #30856 (ReflectionClass::getStaticProperties segfaults)", function () {
    expect(parser.parseCode("<?php\nclass bogus {\n        const C = 'test';\n        static $a = bogus::C;\n}\n$class = new ReflectionClass('bogus');\nvar_dump($class->getStaticProperties());\n?>")).toMatchSnapshot();
  });
});
