// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/try/try_finally_022.phpt
  it("Try finally (exception in \"return\" statement)", function () {
    expect(parser.parseCode("<?php\nclass A {\n    public $x = 1;\n    public $y = 2;\n    function __destruct() {\n        throw new Exception();\n    }\n}\ntry{\n    $a = 0;\n    switch ($a) {\n        case 0:\n    }\n    switch ($a) {\n        case 0:\n    }\n    switch ($a) {\n        case 0:\n    }\n    foreach([new stdClass()] as $x) {\n        foreach(new A() as $a) {\n            foreach([new stdClass()] as $y) {\n                try {\n                    if (0) { echo \"0\" . (int)5; }\n                    return $a;\n                } catch (Exception $e) {\n                    echo \"exception1\\n\";\n                }\n            }\n        }\n    }\n} catch (Exception $e) {\n    echo \"exception2\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
