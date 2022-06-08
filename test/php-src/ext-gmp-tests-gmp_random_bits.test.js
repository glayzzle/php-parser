// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gmp/tests/gmp_random_bits.phpt
  it("gmp_random_bits() basic tests", function () {
    expect(parser.parseCode("<?php\ntry {\n    var_dump(gmp_random_bits(0));\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\ntry {\n    var_dump(gmp_random_bits(-1));\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\n// If these error the test fails.\ngmp_random_bits(1);\ngmp_random_bits(1024);\n// 0.5 seconds to make sure the numbers stay in range\n$start = microtime(true);\n$limit = (2 ** 30) - 1;\nwhile (1) {\n    for ($i = 0; $i < 5000; $i++) {\n        $result = gmp_random_bits(30);\n        if ($result < 0 || $result > $limit) {\n            print \"RANGE VIOLATION\\n\";\n            var_dump($result);\n            break 2;\n        }\n    }\n    if (microtime(true) - $start > 0.5) {\n        break;\n    }\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
