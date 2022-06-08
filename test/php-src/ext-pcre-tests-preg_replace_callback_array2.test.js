// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pcre/tests/preg_replace_callback_array2.phpt
  it("preg_replace_callback_array() errors", function () {
    expect(parser.parseCode("<?php\n$a = array();\n$b = \"\";\ntry {\n    var_dump(preg_replace_callback_array(array(\"xx\" => \"s\"), $a, -1, $b));\n} catch (\\TypeError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\nvar_dump($b);\nfunction f() {\n    static $count = 1;\n    throw new Exception($count);\n}\nvar_dump(preg_replace_callback_array(array('/\\w' => 'f'), 'z'));\ntry {\n    var_dump(preg_replace_callback_array(array('/\\w/' => 'f', '/.*/' => 'f'), 'z'));\n} catch (Exception $e) {\n    var_dump($e->getMessage());\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
