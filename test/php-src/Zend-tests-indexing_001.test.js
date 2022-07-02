// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/indexing_001.phpt
  it("Indexing - various special cases.", function () {
    expect(parser.parseCode("<?php\necho \"*** Indexing - Testing value assignment with key ***\\n\";\n$array=array(1);\n$testvalues=array(null, 0, 1, true, false,'',' ',0.1,array());\nforeach ($testvalues as $testvalue) {\n    try {\n        $testvalue['foo']=$array;\n    } catch (Error $e) {\n        echo $e->getMessage(), \"\\n\";\n    }\n    var_dump($testvalue);\n}\necho \"\\n*** Indexing - Testing reference assignment with key ***\\n\";\n$testvalues=array(null, 0, 1, true, false,0.1,array());\nforeach ($testvalues as $testvalue) {\n    try {\n        $testvalue['foo']=&$array;\n    } catch (Error $e) {\n        echo $e->getMessage(), \"\\n\";\n    }\n    var_dump($testvalue);\n}\necho \"*** Indexing - Testing value assignment no key ***\\n\";\n$array=array(1);\n$testvalues=array(null, 0, 1, true, false,0.1,array());\nforeach ($testvalues as $testvalue) {\n    try {\n        $testvalue[]=$array;\n    } catch (Error $e) {\n        echo $e->getMessage(), \"\\n\";\n    }\n    var_dump ($testvalue);\n}\necho \"\\n*** Indexing - Testing reference assignment no key ***\\n\";\n$testvalues=array(null, 0, 1, true, false,0.1,array());\nforeach ($testvalues as $testvalue) {\n    try {\n        $testvalue[]=&$array;\n    } catch (Error $e) {\n        echo $e->getMessage(), \"\\n\";\n    }\n    var_dump ($testvalue);\n}\n?>")).toMatchSnapshot();
  });
});
