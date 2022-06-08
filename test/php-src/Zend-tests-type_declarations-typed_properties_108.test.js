// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/typed_properties_108.phpt
  it("Variable assignment in catch must respect typed references", function () {
    expect(parser.parseCode("<?php\nclass Test {\n    public int $i = 42;\n    public string $s = \"str\";\n}\n$test = new Test;\n$ref =& $test->i;\ntry {\n    try {\n        throw new Exception(\"ex\");\n    } catch (Exception $ref) {\n        echo \"Unreachable\\n\";\n    }\n} catch (TypeError $e) {\n    var_dump($test->i);\n    echo $e . \"\\n\\n\";\n}\n$ref =& $test->s;\ntry {\n    try {\n        throw new Exception(\"ex\");\n    } catch (Exception $ref) {\n        echo \"Unreachable\\n\";\n    }\n} catch (TypeError $e) {\n    var_dump($test->s);\n    echo $e . \"\\n\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
