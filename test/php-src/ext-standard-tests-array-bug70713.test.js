// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/bug70713.phpt
  it("Bug #70713: Use After Free Vulnerability in array_walk()/array_walk_recursive()", function () {
    expect(parser.parseCode("<?php\nclass obj\n{\n    function __tostring()\n    {\n        global $arr;\n        $arr = 1;\n        for ($i = 0; $i < 5; $i++) {\n            $v[$i] = 'hi'.$i;\n        }\n        return 'hi';\n    }\n}\n$arr = array('string' => new obj);\ntry {\n    array_walk_recursive($arr, 'settype');\n} catch (\\TypeError $e) {\n    echo $e->getMessage() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
