// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/ssa_bug_005.phpt
  it("Assign elision exception safety: UCALL", function () {
    expect(parser.parseCode("<?php\nfunction test() {\n    $dtor = new class { function __destruct() { throw new Exception; } };\n    $a = 1;\n    return [0, $a];\n}\nfunction test2() {\n    $x = test();\n}\ntry {\n    test2();\n} catch (Exception $e) {\n    echo \"caught\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
