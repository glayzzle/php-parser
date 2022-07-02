// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/readonly_props/readonly_modification.phpt
  it("Modifying a readonly property", function () {
    expect(parser.parseCode("<?php\nclass Test {\n    readonly public int $prop;\n    readonly public array $prop2;\n    public function __construct() {\n        // Initializing assignments.\n        $this->prop = 1;\n        $this->prop2 = [];\n    }\n}\nfunction byRef(&$ref) {}\n$test = new Test;\nvar_dump($test->prop); // Read.\ntry {\n    $test->prop = 2;\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    $test->prop += 1;\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    $test->prop++;\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    ++$test->prop;\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    $ref =& $test->prop;\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    $test->prop =& $ref;\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    byRef($test->prop);\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\nvar_dump($test->prop2); // Read.\ntry {\n    $test->prop2[] = 1;\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    $test->prop2[0][] = 1;\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
