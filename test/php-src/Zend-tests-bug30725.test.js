// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug30725.phpt
  it("Bug #30725 (PHP segfaults when an exception is thrown in getIterator() within foreach)", function () {
    expect(parser.parseCode("<?php\nclass Test implements IteratorAggregate\n{\n    function getIterator(): Traversable\n    {\n        throw new Exception();\n    }\n}\ntry\n{\n    $it = new Test;\n    foreach($it as $v)\n    {\n        echo \"Fail\\n\";\n    }\n    echo \"Wrong\\n\";\n}\ncatch(Exception $e)\n{\n    echo \"Caught\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
