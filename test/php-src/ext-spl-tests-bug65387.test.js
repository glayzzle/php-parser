// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug65387.phpt
  it("Bug #67387: Circular references in SPL iterators are not garbage collected", function () {
    expect(parser.parseCode("<?php\n$it = new ArrayIterator([1, 2, 3]);\n// Inner.\n$it[] = $it;\n// Callback\n$it2 = new CallbackFilterIterator($it, function($elem) use(&$it2) {\n    return true;\n});\n// Callback object\nnew class {\n    public function __construct() {\n        $it = new ArrayIterator([1, 2, 3]);\n        $this->it = new CallbackFilterIterator($it, function($elem) {\n            return true;\n        });\n    }\n};\n// Recursive callback\n$it = new RecursiveArrayIterator([1, 2, 3]);\n$it2 = new RecursiveCallbackFilterIterator($it, function($elem) use(&$it2) {\n    return true;\n});\n// Cache\n$it = new ArrayIterator();\n$it2 = new CachingIterator($it, CachingIterator::FULL_CACHE);\n$it2['x'] = $it2;\n$it2->next();\n// Recursive cache\n$it = new RecursiveArrayIterator();\n$it2 = new RecursiveCachingIterator($it, CachingIterator::FULL_CACHE);\n$it2['x'] = $it2;\n$it2->next();\n// Append\n$it = new ArrayIterator();\n$it2 = new AppendIterator();\n$it[] = $it2;\n$it2->append($it);\n// Recursive iterator\n$it = new RecursiveArrayIterator([1, 2, 3]);\n$it2 = new RecursiveIteratorIterator($it);\n$it[] = $it2;\n// Recursive iterator at level>0.\n$it = new RecursiveArrayIterator([[1]]);\n$it2 = new RecursiveIteratorIterator($it);\n$it[] = $it2;\n$it2->next();\n?>\n===DONE===")).toMatchSnapshot();
  });
});
