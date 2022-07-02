// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/bug33605.phpt
  it("Bug #33605 (substr_compare crashes)", function () {
    expect(parser.parseCode("<?php\ntry {\n    substr_compare(\"aa\", \"a\", -99999999, -1, 0);\n} catch (\\ValueError $e) {\n    echo $e->getMessage();\n}\n?>")).toMatchSnapshot();
  });
});
