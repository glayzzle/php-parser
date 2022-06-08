// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionClass_newInstance_001.phpt
  it("ReflectionClass::newInstance()", function () {
    expect(parser.parseCode("<?php\nclass B {\n    public function __construct($a, $b) {\n        echo \"In constructor of class B with args $a, $b\\n\";\n    }\n}\nclass C {\n    protected function __construct() {\n        echo \"In constructor of class C\\n\";\n    }\n}\nclass D {\n    private function __construct() {\n        echo \"In constructor of class D\\n\";\n    }\n}\nclass E {\n}\n$rcB = new ReflectionClass('B');\n$rcC = new ReflectionClass('C');\n$rcD = new ReflectionClass('D');\n$rcE = new ReflectionClass('E');\ntry {\n    var_dump($rcB->newInstance());\n} catch (Throwable $e) {\n    echo \"Exception: \" . $e->getMessage() . \"\\n\";\n}\ntry {\n    var_dump($rcB->newInstance('x', 123));\n} catch (Throwable $e) {\n    echo \"Exception: \" . $e->getMessage() . \"\\n\";\n}\ntry {\n    $rcC->newInstance();\n    echo \"you should not see this\\n\";\n} catch (Exception $e) {\n    echo $e->getMessage() . \"\\n\";\n}\ntry {\n    $rcD->newInstance();\n    echo \"you should not see this\\n\";\n} catch (Exception $e) {\n    echo $e->getMessage() . \"\\n\";\n}\n$e1 = $rcE->newInstance();\nvar_dump($e1);\ntry {\n    $e2 = $rcE->newInstance('x');\n    echo \"you should not see this\\n\";\n} catch (Exception $e) {\n    echo $e->getMessage() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
