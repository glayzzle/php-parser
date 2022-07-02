// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/serialize/bug72663.phpt
  it("Bug #72663 (1): Don't call __destruct if __wakeup not called or fails", function () {
    expect(parser.parseCode("<?php\nclass Test1 {\n    public function __wakeup() {\n        echo \"Wakeup\\n\";\n    }\n    public function __destruct() {\n        echo \"Dtor\\n\";\n    }\n}\nclass Test2 {\n    public function __wakeup() {\n        throw new Exception('Unserialization forbidden');\n    }\n    public function __destruct() {\n        echo \"Dtor\\n\";\n    }\n}\n// Unserialize object with error in properties\n$s = 'O:5:\"Test1\":1:{s:10:\"\";}';\nvar_dump(unserialize($s));\n// Variation: Object is turned into a reference\n$s = 'O:5:\"Test1\":2:{i:0;R:1;s:10:\"\";}';\nvar_dump(unserialize($s));\n// Unserialize object with throwing __wakeup\n$s = 'O:5:\"Test2\":0:{}';\ntry {\n    var_dump(unserialize($s));\n} catch (Exception $e) {\n    echo \"Caught\\n\";\n}\n//\n// Variation: Object is turned into a reference\n$s = 'O:5:\"Test2\":1:{i:0;R:1;}';\ntry {\n    var_dump(unserialize($s));\n} catch (Exception $e) {\n    echo \"Caught\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
