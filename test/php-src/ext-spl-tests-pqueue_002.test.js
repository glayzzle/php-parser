// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/pqueue_002.phpt
  it("SPL: SplPriorityQueue: exceptions", function () {
    expect(parser.parseCode("<?php\nclass myPQueue extends SplPriorityQueue {\n    public function compare($a, $b): int {\n        throw new exception(\"foo\");\n    }\n}\n$h = new myPQueue;\ntry {\n    $h->insert(1, 1);\n    echo \"inserted 1\\n\";\n    $h->insert(2, 1);\n    echo \"inserted 2\\n\";\n    $h->insert(3, 1);\n    echo \"inserted 3\\n\";\n} catch(Exception $e) {\n    echo \"Exception: \".$e->getMessage().\"\\n\";\n}\ntry {\n    $h->insert(4, 1);\n    echo \"inserted 4\\n\";\n} catch(Exception $e) {\n    echo \"Exception: \".$e->getMessage().\"\\n\";\n}\ntry {\n    var_dump($h->extract());\n} catch(Exception $e) {\n    echo \"Exception: \".$e->getMessage().\"\\n\";\n}\ntry {\n    var_dump($h->extract());\n} catch(Exception $e) {\n    echo \"Exception: \".$e->getMessage().\"\\n\";\n}\necho \"Recovering..\\n\";\n$h->recoverFromCorruption();\ntry {\n    var_dump($h->extract());\n} catch(Exception $e) {\n    echo \"Exception: \".$e->getMessage().\"\\n\";\n}\ntry {\n    var_dump($h->extract());\n} catch(Exception $e) {\n    echo \"Exception: \".$e->getMessage().\"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
