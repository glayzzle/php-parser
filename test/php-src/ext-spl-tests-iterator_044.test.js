// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/iterator_044.phpt
  it("SPL: CachingIterator and offsetGet/Exists using flag FULL_CACHE", function () {
    expect(parser.parseCode("<?php\nclass MyFoo\n{\n    function __toString()\n    {\n        return 'foo';\n    }\n}\nclass MyCachingIterator extends CachingIterator\n{\n    function __construct(Iterator $it, $flags = 0)\n    {\n        parent::__construct($it, $flags);\n    }\n    function test($ar)\n    {\n        foreach($ar as $k => $v)\n        {\n            echo \"===$k===\\n\";\n            var_dump($v);\n            try {\n                var_dump($this->offsetExists($v));\n            } catch (TypeError $e) {\n                echo $e->getMessage(), \"\\n\";\n            }\n            try {\n                var_dump($this->offsetGet($v));\n            } catch (TypeError $e) {\n                echo $e->getMessage(), \"\\n\";\n            }\n        }\n    }\n}\n$it = new MyCachingIterator(new ArrayIterator(array(0, 'foo'=>1, 2, 'bar'=>3, 4)));\ntry\n{\n    var_dump($it->offsetExists(0));\n}\ncatch(Exception $e)\n{\n    echo \"Exception: \" . $e->getMessage() . \"\\n\";\n}\ntry\n{\n    var_dump($it->offsetGet(0));\n}\ncatch(Exception $e)\n{\n    echo \"Exception: \" . $e->getMessage() . \"\\n\";\n}\n$it = new MyCachingIterator(new ArrayIterator(array(0, 'foo'=>1, 2, 'bar'=>3, 4)), CachingIterator::FULL_CACHE);\n$checks = array(0, new stdClass, new MyFoo, NULL, 2, 'foo', 3);\n$it->test($checks);\necho \"===FILL===\\n\";\nforeach($it as $v); // read all into cache\n$it->test($checks);\n?>")).toMatchSnapshot();
  });
});
