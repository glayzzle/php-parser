// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug26698.phpt
  it("Bug #26698 (Thrown exceptions while evaluating argument to pass as parameter crash PHP)", function () {
    expect(parser.parseCode("<?php\nini_set(\"report_memleaks\", 0);  // the exception thrown in this test results in a memory leak, which is fine\nclass ObjectOne\n{\n    function getNone()\n    {\n        throw new Exception('NONE');\n    }\n}\nclass Proxy\n{\n    function three($a, $b, $c)\n    {\n    }\n    function callOne()\n    {\n        try\n        {\n            $res = new ObjectOne();\n            $this->three($res->getNone());\n        }\n        catch(Exception $e)\n        {\n            echo 'Caught: '.$e->getMessage().\"\\n\";\n        }\n    }\n    function callTwo()\n    {\n        try\n        {\n            $res = new ObjectOne();\n            $this->three(1, $res->getNone());\n        }\n        catch(Exception $e)\n        {\n            echo 'Caught: '.$e->getMessage().\"\\n\";\n        }\n    }\n    function callThree()\n    {\n        try\n        {\n            $res = new ObjectOne();\n            $this->three(1, 2, $res->getNone());\n        }\n        catch(Exception $e)\n        {\n            echo 'Caught: '.$e->getMessage().\"\\n\";\n        }\n    }\n}\n$p = new Proxy();\n$p->callOne();\n$p->callTwo();\n$p->callThree();\n?>")).toMatchSnapshot();
  });
});
