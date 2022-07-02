// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug71922.phpt
  it("Bug #71922: Crash on assert(new class{});", function () {
    expect(parser.parseCode("<?php\ntry {\n    assert(0 && new class {\n    } && new class(42) extends stdclass {\n    });\n} catch (AssertionError $e) {\n    echo \"Assertion failure: \", $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
