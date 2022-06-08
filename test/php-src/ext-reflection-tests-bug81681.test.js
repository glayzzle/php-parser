// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/bug81681.phpt
  it("Bug #81681 (ReflectionEnum throwing exceptions)", function () {
    expect(parser.parseCode("<?php\nenum Status\n{\n    case Draft;\n    case Published;\n    case Archived;\n}\n$reflectionEnum = new \\ReflectionEnum('\\Status');\nvar_dump($reflectionEnum->isInstantiable());\nvar_dump($reflectionEnum->isCloneable());\n?>")).toMatchSnapshot();
  });
});
