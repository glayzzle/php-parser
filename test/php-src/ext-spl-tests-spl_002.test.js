// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/spl_002.phpt
  it("SPL: Countable", function () {
    expect(parser.parseCode("<?php\nclass Test implements Countable\n{\n    function count(): int\n    {\n        return 4;\n    }\n};\n$a = new Test;\nvar_dump(count($a));\n?>")).toMatchSnapshot();
  });
});
