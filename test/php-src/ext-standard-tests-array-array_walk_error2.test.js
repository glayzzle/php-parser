// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_walk_error2.phpt
  it("Test array_walk() function : error conditions - callback parameters", function () {
    expect(parser.parseCode("<?php\n/*\n * Testing array_walk() by passing more number of parameters to callback function\n */\n$input = array(1);\nfunction callback1($value, $key, $user_data ) {\n  echo \"\\ncallback1() invoked \\n\";\n}\nfunction callback2($value, $key, $user_data1, $user_data2) {\n  echo \"\\ncallback2() invoked \\n\";\n}\necho \"*** Testing array_walk() : error conditions - callback parameters ***\\n\";\n// expected: Missing argument Warning\ntry {\n    var_dump( array_walk($input, \"callback1\") );\n} catch (Throwable $e) {\n    echo \"Exception: \" . $e->getMessage() . \"\\n\";\n}\ntry {\n    var_dump( array_walk($input, \"callback2\", 4) );\n} catch (Throwable $e) {\n    echo \"Exception: \" . $e->getMessage() . \"\\n\";\n}\n// expected: Warning is suppressed\ntry {\n    var_dump( @array_walk($input, \"callback1\") );\n} catch (Throwable $e) {\n    echo \"Exception: \" . $e->getMessage() . \"\\n\";\n}\ntry {\n    var_dump( @array_walk($input, \"callback2\", 4) );\n} catch (Throwable $e) {\n    echo \"Exception: \" . $e->getMessage() . \"\\n\";\n}\necho \"-- Testing array_walk() function with too many callback parameters --\\n\";\ntry {\n    var_dump( array_walk($input, \"callback1\", 20, 10) );\n} catch (Throwable $e) {\n    echo \"Exception: \" . $e->getMessage() . \"\\n\";\n}\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
