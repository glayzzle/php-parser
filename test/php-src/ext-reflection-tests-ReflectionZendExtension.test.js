// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionZendExtension.phpt
  it("Test ReflectionZendExtension class", function () {
    expect(parser.parseCode("<?php\n$reflection = new ReflectionZendExtension('Zend OPcache');\nvar_dump($reflection->getAuthor());\nvar_dump($reflection->getCopyright());\nvar_dump($reflection->getName());\nvar_dump($reflection->getURL());\nvar_dump($reflection->getVersion() === PHP_VERSION);\n?>")).toMatchSnapshot();
  });
});
