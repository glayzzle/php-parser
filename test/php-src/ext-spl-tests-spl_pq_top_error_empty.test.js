// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/spl_pq_top_error_empty.phpt
  it("SPL: SplPriorityQueue: top exception on empty heap", function () {
    expect(parser.parseCode("<?php\n$priorityQueue = new SplPriorityQueue();\ntry {\n    $priorityQueue->top();\n} catch (RuntimeException $e) {\n    echo \"Exception: \".$e->getMessage().PHP_EOL;\n}\n?>")).toMatchSnapshot();
  });
});
