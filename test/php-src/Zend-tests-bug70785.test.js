// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug70785.phpt
  it("Bug #70785 (Infinite loop due to exception during identical comparison)", function () {
    expect(parser.parseCode("<?php\nset_error_handler(function($no, $msg) {\n    throw new Exception($msg);\n});\ntry {\n    if ($a === null) { // ZEND_VM_SMART_BRANCH\n        undefined_function('Null');\n    }\n} catch (Exception $e) {\n}\ntry  {\n    $c === 3; // ZEND_VM_NEXT_OPCODE\n    undefined_function();\n} catch (Exception $e) {\n}\n?>\nokey")).toMatchSnapshot();
  });
});
