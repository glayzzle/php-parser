// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/bug67249.phpt
  it("Bug #67249 (printf out-of-bounds read)", function () {
    expect(parser.parseCode("<?php\ntry {\n    var_dump(sprintf(\"%'\", \"foo\"));\n} catch (ValueError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
