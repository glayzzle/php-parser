// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/array_027.phpt
  it("SPL: ArrayObject revursive var_dump", function () {
    expect(parser.parseCode("<?php\nclass AO extends ArrayObject {\n}\n$o = new AO();\n$o['plop'] = $o;\nvar_dump($o);\n?>")).toMatchSnapshot();
  });
});
