// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/011.phpt
  it("ReflectionExtension::getClasses()", function () {
    expect(parser.parseCode("<?php\n$ext = new ReflectionExtension(\"reflection\");\n$classes = $ext->getClasses();\necho $classes[\"ReflectionException\"]->getName();\n?>")).toMatchSnapshot();
  });
});
