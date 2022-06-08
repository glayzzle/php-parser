// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/bug79971_2.phpt
  it("Bug #79971 (special character is breaking the path in xml function)", function () {
    expect(parser.parseCode("<?php\n$imp = new DOMImplementation;\nif (PHP_OS_FAMILY === 'Windows') {\n    $path = '/' . str_replace('\\\\', '/', __DIR__);\n} else {\n    $path = __DIR__;\n}\n$uri = \"file://$path/bug79971_2.xml\";\nvar_dump($imp->createDocumentType(\"$uri%00foo\"));\n?>")).toMatchSnapshot();
  });
});
