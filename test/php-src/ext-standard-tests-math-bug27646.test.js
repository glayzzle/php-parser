// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/math/bug27646.phpt
  it("Bug #27646 (Cannot serialize/unserialize non-finite numeric values)", function () {
    expect(parser.parseCode("<?php\nset_time_limit(5);\n$f=12.3;\nvar_dump($f);\nvar_dump(serialize($f));\nvar_dump(unserialize(serialize($f)));\n$f=-12.3;\nvar_dump($f);\nvar_dump(serialize($f));\nvar_dump(unserialize(serialize($f)));\n$f=-INF;\nvar_dump($f);\nvar_dump(serialize($f));\nvar_dump(unserialize(serialize($f)));\n$f=INF;\nvar_dump($f);\nvar_dump(serialize($f));\nvar_dump(unserialize(serialize($f)));\n$f=NAN;\nvar_dump($f);\nvar_dump(serialize($f));\nvar_dump(unserialize(serialize($f)));\n?>")).toMatchSnapshot();
  });
});
