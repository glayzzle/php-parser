// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/com_dotnet/tests/bug79247.phpt
  it("Bug #79247 (Garbage collecting variant objects segfaults)", function () {
    expect(parser.parseCode("<?php\n$keep = new variant(null);\nvar_dump(gc_collect_cycles());\n?>")).toMatchSnapshot();
  });
});
