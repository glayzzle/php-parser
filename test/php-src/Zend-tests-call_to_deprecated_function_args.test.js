// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/call_to_deprecated_function_args.phpt
  it("Check that arguments are freed when calling a deprecated function", function () {
    expect(parser.parseCode("<?php\nset_error_handler(function($code, $msg) {\n    throw new Error($msg);\n});\ntry {\n    zend_test_deprecated(new stdClass);\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n$ret = new stdClass;\ntry {\n    $ret = zend_test_deprecated(new stdClass());\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    $fn = 'zend_test_deprecated';\n    $fn(new stdClass);\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n$ret = new stdClass;\ntry {\n    $fn = 'zend_test_deprecated';\n    $ret = $fn(new stdClass);\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
