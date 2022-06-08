// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/bug69125.phpt
  it("Bug #69125 (Array numeric string as key)", function () {
    expect(parser.parseCode("<?php\nconst SZERO = '0';\nconst SONE = '1';\n$array[SZERO] = \"okey\";\n$array[1] = \"okey\";\nvar_dump($array[SZERO]);\nvar_dump($array[SONE]);\n?>")).toMatchSnapshot();
  });
});
