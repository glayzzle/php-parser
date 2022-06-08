// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/uconverter_oop_algo.phpt
  it("UConverter Algorithmic converters", function () {
    expect(parser.parseCode("<?php\n$c = new UConverter('utf-8', 'latin1');\nvar_dump(UConverter::LATIN_1 === $c->getSourceType());\nvar_dump(UConverter::UTF8    === $c->getDestinationType());\n$c = new UConverter('koi8-r', 'utf-32be');\nvar_dump(UConverter::UTF32_BigEndian === $c->getSourceType());\nvar_dump(UConverter::SBCS            === $c->getDestinationType());\n?>")).toMatchSnapshot();
  });
});
