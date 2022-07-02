// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/bug74345.phpt
  it("Bug #74345: Call trampoline leaked if callback not invoked", function () {
    expect(parser.parseCode("<?php\nclass Test {\n    public function __call($name, $args) {\n        echo \"__call()\\n\";\n    }\n}\n$name = \"foo\" . ($x = \"bar\");\n$cb = [new Test, $name];\narray_map($cb, []);\narray_map($cb, [], []);\ntry {\n    array_map($cb, null);\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    array_map($cb, null, null);\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\narray_filter([], $cb);\narray_reduce([], $cb);\n$array = [];\narray_walk($array, $cb);\narray_walk_recursive($array, $cb);\nusort($array, $cb);\ntry {\n    preg_replace_callback('/./', $cb, new stdClass);\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>\n===DONE===")).toMatchSnapshot();
  });
});
