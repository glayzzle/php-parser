// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/generators/throw_into_yield_from_array.phpt
  it("Throwing into a generator yielding from an array/iterator", function () {
    expect(parser.parseCode("<?php\n$data = [1, 2, 3];\nfunction yielditer($arr) {\n    foreach($arr as $val) {\n        yield $val;\n    }\n}\nfunction yf($in) {\n    yield from $in;\n}\nfunction test($g) {\n    var_dump($g->current());\n    try {\n        $g->throw(new Exception(\"Exception!\"));\n    } catch (Exception $e) {\n        echo \"{$e->getMessage()}\\n\";\n    }\n    var_dump($g->current());\n}\n$yfiter = yf($data);\n$yfgen = yf(yielditer($data));\ntest(yf($data));\necho \"\\n\";\ntest(yf(yielditer($data)));\n?>")).toMatchSnapshot();
  });
});
