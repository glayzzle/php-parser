// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/return_types/028.phpt
  it("Memory leak when returning TMP/VAR with wrong return type", function () {
    expect(parser.parseCode("<?php\nfunction foo(): stdClass {\n    $a = new stdClass;\n    $b = [];\n    return [$a, $b];\n}\ntry {\n    foo();\n} catch (Error $e) {\n    echo $e->getMessage(), \" in \", $e->getFile(), \" on line \", $e->getLine();\n}\n?>")).toMatchSnapshot();
  });
});
