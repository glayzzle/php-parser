// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/bug75317.phpt
  it("Bug #75317 (UConverter::setDestinationEncoding changes source instead of destinatination)", function () {
    expect(parser.parseCode("<?php\n$utf8 = UConverter::getAliases('utf-8')[0];\n$utf16 = UConverter::getAliases('utf-16')[0];\n$utf32 = UConverter::getAliases('utf-32')[0];\n$latin1 = UConverter::getAliases('latin1')[0];\nfunction printResult($actual, $expected) {\n    var_dump($actual === $expected ? true : \"expected: $expected, actual: $actual\");\n}\n// test default values\n$c = new UConverter();\nprintResult($c->getDestinationEncoding(), $utf8);\nprintResult($c->getSourceEncoding(), $utf8);\n// test constructor args\n$c = new UConverter('utf-16', 'latin1');\nprintResult($c->getDestinationEncoding(), $utf16);\nprintResult($c->getSourceEncoding(), $latin1);\n// test setters\nvar_dump($c->setDestinationEncoding('utf-8'));\nvar_dump($c->setSourceEncoding('utf-32'));\nprintResult($c->getDestinationEncoding(), $utf8);\nprintResult($c->getSourceEncoding(), $utf32);\n// test invalid inputs dont change values\nvar_dump($c->setDestinationEncoding('foobar') === false);\nvar_dump($c->setSourceEncoding('foobar') === false);\nprintResult($c->getDestinationEncoding(), $utf8);\nprintResult($c->getSourceEncoding(), $utf32);\n?>")).toMatchSnapshot();
  });
});
