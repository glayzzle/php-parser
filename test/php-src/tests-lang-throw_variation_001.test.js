// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/throw_variation_001.phpt
  it("Catching an exception thrown from an included file", function () {
    expect(parser.parseCode("<?php\ntry {\n    include \"inc_throw.inc\";\n} catch (Exception $e) {\n    echo \"caught exception\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
