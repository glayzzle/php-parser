// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/ssa_bug_004.phpt
  it("Assign elision exception safety: ICALL", function () {
    expect(parser.parseCode("<?php\nset_error_handler(function() { throw new Exception; });\nfunction test() {\n    $x = str_replace(['foo'], [[]], ['foo']);\n}\ntry {\n    test();\n} catch (Exception $e) {\n    echo \"caught\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
