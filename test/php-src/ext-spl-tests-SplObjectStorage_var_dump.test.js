// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/SplObjectStorage_var_dump.phpt
  it("SPL: SplObjectStorage: recursive var_dump", function () {
    expect(parser.parseCode("<?php\n$o = new SplObjectStorage();\n$o[new StdClass] = $o;\nvar_dump($o);")).toMatchSnapshot();
  });
});
