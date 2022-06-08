// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug46160.phpt
  it("Bug #46160 (SPL - Memory leak when exception is throwed in offsetSet method)", function () {
    expect(parser.parseCode("<?php\ntry {\n    $x = new splqueue;\n    $x->offsetSet(0, 0);\n} catch (Exception $e) { }\n?>\nDONE")).toMatchSnapshot();
  });
});
