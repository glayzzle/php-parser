// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/fetch_obj_010.phpt
  it("JIT: FETCH_OBJ 010", function () {
    expect(parser.parseCode("<?php\nfunction foo() {\n    for($cnt=0;$cnt<3;$cnt++) {\n        $obj->ary[\"bas\"] ??= $obj = new stdClass;\n    }\n}\nfoo();\n?>\nDONE")).toMatchSnapshot();
  });
});
