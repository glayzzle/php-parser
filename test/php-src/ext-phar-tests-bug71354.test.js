// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/bug71354.phpt
  it("Phar: bug #71354: Heap corruption in tar/zip/phar parser.", function () {
    expect(parser.parseCode("<?php\n$p = new PharData(__DIR__.\"/bug71354.tar\");\nvar_dump($p['aaaa']->getContent());\n?>\nDONE")).toMatchSnapshot();
  });
});
