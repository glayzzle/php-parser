// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/match/045.phpt
  it("Corrupted CFG due to unreachable free with match", function () {
    expect(parser.parseCode("<?php\nfunction test() {\n    var_dump(match(x){});\n    match(y){\n        3, 4 => 5,\n    };\n}\ntry {\n    test();\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
