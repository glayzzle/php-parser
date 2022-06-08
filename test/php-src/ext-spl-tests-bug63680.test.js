// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug63680.phpt
  it("Bug #63680 (Memleak in splfixedarray with cycle reference)", function () {
    expect(parser.parseCode("<?php\nfunction dummy() {\n    $a = new SplFixedArray(1);\n    $b = new SplFixedArray(1);\n    $a[0] = $b;\n    $b[0] = $a;\n}\ndummy();\nvar_dump(gc_collect_cycles());\n?>")).toMatchSnapshot();
  });
});
