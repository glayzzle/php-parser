// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/bug77395.phpt
  it("Bug #77395 (segfault about array_multisort)", function () {
    expect(parser.parseCode("<?php\nfunction error_handle($level, $message, $file = '', $line = 0){\n    $a = [1,2,3];\n    $b = [3,2,1];\n    echo $message;\n    array_multisort($a, SORT_ASC, $b); // if comment this line, no segfault happen\n}\nset_error_handler('error_handle');\n$data = [['aa'=> 'bb',], ['aa'=> 'bb',],];\ntry {\n    array_multisort(array_column($data, 'bb'),SORT_DESC, $data); // PHP Warning error\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
