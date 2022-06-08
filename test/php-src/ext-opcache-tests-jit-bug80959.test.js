// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/bug80959.phpt
  it("Bug #80959: infinite loop in building cfg during JIT compilation", function () {
    expect(parser.parseCode("<?php\nfunction test($a, $b) {\n    echo \"Start\\n\";\n    $i = $j = 0;\n    do {\n        $i++;\n        try {\n           continue;\n        } catch (Exception $e) {\n        }\n        do {\n           $j++;\n        } while ($j < $b);\n    } while ($i < $a);\n    echo \"Done $i $j\\n\";\n}\ntest(5, 6);\n?>")).toMatchSnapshot();
  });
});
