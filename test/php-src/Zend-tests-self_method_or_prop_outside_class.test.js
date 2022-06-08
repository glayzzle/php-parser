// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/self_method_or_prop_outside_class.phpt
  it("Accessing self:: properties or methods outside a class", function () {
    expect(parser.parseCode("<?php\n$fn = function() {\n    $str = \"foo\";\n    try {\n        self::${$str . \"bar\"};\n    } catch (Error $e) {\n        echo $e->getMessage(), \"\\n\";\n    }\n    try {\n        unset(self::${$str . \"bar\"});\n    } catch (Error $e) {\n        echo $e->getMessage(), \"\\n\";\n    }\n    try {\n        isset(self::${$str . \"bar\"});\n    } catch (Error $e) {\n        echo $e->getMessage(), \"\\n\";\n    }\n    try {\n        self::{$str . \"bar\"}();\n    } catch (Error $e) {\n        echo $e->getMessage(), \"\\n\";\n    }\n};\n$fn();\n?>")).toMatchSnapshot();
  });
});
