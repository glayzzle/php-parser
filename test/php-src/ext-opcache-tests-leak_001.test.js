// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/leak_001.phpt
  it("Leak 001: Incorrect 'if ();' optimization", function () {
    expect(parser.parseCode("<?php\nif (false);\nif (true);\nif (2 + 3);\n$x = 2;\n$y = 3;\nif ($x + $y);\nif ($x);\n$a = [[$x]];\nif ($a[0]);\nif (new stdClass());\n$x = 2;\n$a = [1,$x];\nif ((object)$a);\n?>\nOK")).toMatchSnapshot();
  });
});
