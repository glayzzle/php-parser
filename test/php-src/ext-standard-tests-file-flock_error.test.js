// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/flock_error.phpt
  it("Test flock() function: Error conditions", function () {
    expect(parser.parseCode("<?php\n/*\nDescription: PHP supports a portable way of locking complete files\n  in an advisory way\n*/\necho \"*** Testing error conditions ***\\n\";\n$file = preg_replace(\"~\\.phpt?$~\", '.tmp', __FILE__);\n$fp = fopen($file, \"w\");\n/* array of operations */\n$operations = array(\n  0,\n  LOCK_NB,\n  FALSE,\n  array(1,2,3),\n  array(),\n  \"string\",\n  \"\",\n  \"\\0\"\n);\n$i = 0;\nforeach($operations as $operation) {\n    echo \"--- Iteration $i ---\" . \\PHP_EOL;\n    try {\n        var_dump(flock($fp, $operation));\n    } catch (\\TypeError|\\ValueError $e) {\n        echo $e->getMessage() . \\PHP_EOL;\n    }\n    $i++;\n}\n/* Invalid arguments */\n$fp = fopen($file, \"w\");\nfclose($fp);\ntry {\n    var_dump(flock($fp, LOCK_SH|LOCK_NB));\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
