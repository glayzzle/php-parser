// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/bug65845.phpt
  it("Bug #65845 (Error when Zend Opcache Optimizer is fully enabled)", function () {
    expect(parser.parseCode("<?php\n$Pile['vars'][(string)'toto'] = 'tutu';\nvar_dump($Pile['vars']['toto']);\n?>")).toMatchSnapshot();
  });
});
