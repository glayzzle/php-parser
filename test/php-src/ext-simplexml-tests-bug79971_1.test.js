// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/simplexml/tests/bug79971_1.phpt
  it("Bug #79971 (special character is breaking the path in xml function)", function () {
    expect(parser.parseCode("<?php\nif (PHP_OS_FAMILY === 'Windows') {\n    $path = '/' . str_replace('\\\\', '/', __DIR__);\n} else {\n    $path = __DIR__;\n}\n$uri = \"file://$path/bug79971_1.xml\";\nvar_dump(simplexml_load_file(\"$uri%00foo\"));\n$sxe = simplexml_load_file($uri);\nvar_dump($sxe->asXML(\"$uri.out%00foo\"));\n?>")).toMatchSnapshot();
  });
});
