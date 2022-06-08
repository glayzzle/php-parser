// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/ssa_bug_003.phpt
  it("Incorrect elision of return type checks", function () {
    expect(parser.parseCode("<?php\nfunction test1($x) : callable {\n    if ($x == 1) {\n        $c = 'foo';\n    } elseif ($x == 2) {\n        $c = new stdClass;\n    } else {\n        $c = [$x => &$x];\n    }\n    return $c;\n}\ntry {\n    test1(1);\n} catch (Error $e) {\n    echo $e->getMessage() . \"\\n\";\n}\nclass Foo {}\nfunction test2() : Foo {\n    $obj = new stdClass;\n    return $obj;\n}\ntry {\n    test2();\n} catch (Error $e) {\n    echo $e->getMessage() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
