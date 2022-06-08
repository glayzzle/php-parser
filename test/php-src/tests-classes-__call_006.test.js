// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/__call_006.phpt
  it("Ensure exceptions are handled properly when thrown in __call.", function () {
    expect(parser.parseCode("<?php\nclass A {\n    function __call($strMethod, $arrArgs) {\n        var_dump($this);\n        throw new Exception;\n        echo \"You should not see this\";\n    }\n    function test() {\n        A::unknownCalledWithSRO(1,2,3);\n    }\n}\nclass B extends A {\n    function test() {\n        B::unknownCalledWithSROFromChild(1,2,3);\n    }\n}\n$a = new A();\necho \"---> Invoke __call via simple method call.\\n\";\ntry {\n    $a->unknown();\n} catch (Exception $e) {\n    echo \"Exception caught OK; continuing.\\n\";\n}\necho \"\\n\\n---> Invoke __call via scope resolution operator within instance.\\n\";\ntry {\n    $a->test();\n} catch (Exception $e) {\n    echo \"Exception caught OK; continuing.\\n\";\n}\necho \"\\n\\n---> Invoke __call via scope resolution operator within child instance.\\n\";\n$b = new B();\ntry {\n    $b->test();\n} catch (Exception $e) {\n    echo \"Exception caught OK; continuing.\\n\";\n}\necho \"\\n\\n---> Invoke __call via callback.\\n\";\ntry {\n    call_user_func(array($b, 'unknownCallback'), 1,2,3);\n} catch (Exception $e) {\n    echo \"Exception caught OK; continuing.\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
