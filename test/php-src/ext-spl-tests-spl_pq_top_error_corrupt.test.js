// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/spl_pq_top_error_corrupt.phpt
  it("SPL: SplPriorityQueue: top and extract flags", function () {
    expect(parser.parseCode("<?php\nclass myPriorityQueue extends SplPriorityQueue{\n    public function compare($a, $b): int {\n         if ($b == 2) {\n        throw new Exception('ignore me');\n        }  else {\n        return parent::compare($a, $b);\n        }\n    }\n}\n$priorityQueue = new myPriorityQueue();\n$priorityQueue->insert(\"a\", 1);\ntry {\n    //corrupt heap\n    $priorityQueue->insert(\"b\", 2);\n        // ignore exception tested elsewhere\n} catch (Exception $e) {\n}\ntry {\n    $priorityQueue->top();\n} catch (RuntimeException $e) {\n  echo \"Exception: \".$e->getMessage().PHP_EOL;\n}\n?>")).toMatchSnapshot();
  });
});
