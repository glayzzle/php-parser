// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/bug71625.phpt
  it("Phar - Bug #71625 - Crash in php7.dll", function () {
    expect(parser.parseCode("<?php\n$phar = new Phar(\"A:A:.phar\");\n$phar[\"hello_habr.txt\"] = '<? Hello Habr!?>';\n?>\nDONE")).toMatchSnapshot();
  });
});
