// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/simplexml/tests/bug54973.phpt
  it("Bug #54973: SimpleXML casts integers wrong", function () {
    expect(parser.parseCode("<?php\n$xml = simplexml_load_string(\"<xml><number>9223372036854775808</number></xml>\");\nvar_dump($xml->number);\n$int = $xml->number / 1024 / 1024 / 1024;\nvar_dump($int);\n$double = (double) $xml->number / 1024 / 1024 / 1024;\nvar_dump($double);\n?>")).toMatchSnapshot();
  });
});
