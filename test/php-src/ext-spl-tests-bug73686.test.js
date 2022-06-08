// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug73686.phpt
  it("Bug #73686 (Adding settype()ed values to ArrayObject results in references)", function () {
    expect(parser.parseCode("<?php\n$ao = new ArrayObject;\nforeach ([1, 2, 3] as $i => $var)\n{\n    settype($var, 'string');\n    $ao[$i] = $var;\n}\nvar_dump($ao);\n$ao = new ArrayObject;\nforeach ([1, 2, 3] as $i => $var)\n{\n    $ao[$i] = &$var;\n}\nvar_dump($ao);\n?>")).toMatchSnapshot();
  });
});
