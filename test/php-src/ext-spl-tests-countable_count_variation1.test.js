// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/countable_count_variation1.phpt
  it("SPL: Countable::count() with wrong return types and exception.", function () {
    expect(parser.parseCode("<?php\nClass returnNull implements Countable {\n    function count(): int {\n        return 0;\n    }\n}\nClass returnString implements Countable {\n    #[ReturnTypeWillChange]\n    function count() {\n        return \"hello\";\n    }\n}\nClass returnObject implements Countable {\n    #[ReturnTypeWillChange]\n    function count() {\n        return new returnObject;\n    }\n}\nClass returnArray implements Countable {\n    #[ReturnTypeWillChange]\n    function count() {\n        return array(1,2,3);\n    }\n}\nClass throwException implements Countable {\n    #[ReturnTypeWillChange]\n    function count() {\n        throw new Exception('Thrown from count');\n    }\n}\necho \"Count returns null:\\n\";\nvar_dump(count(new returnNull));\necho \"Count returns a string:\\n\";\nvar_dump(count(new returnString));\necho \"Count returns an object:\\n\";\nvar_dump(count(new returnObject));\necho \"Count returns an array:\\n\";\nvar_dump(count(new returnArray));\necho \"Count throws an exception:\\n\";\ntry {\n    echo count(new throwException);\n} catch (Exception $e) {\n    echo $e->getMessage();\n}\n?>")).toMatchSnapshot();
  });
});
