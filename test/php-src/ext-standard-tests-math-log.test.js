// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/math/log.phpt
  it("log() tests", function () {
    expect(parser.parseCode("<?php\necho \"On failure, please mail result to php-dev@lists.php.net\\n\";\nfor ($x = 0, $count= 0; $x < 200; $x++) {\n    $x2 = (int) exp(log($x));\n    // e ^ log(x) should be close in range to x\n    if (($x2 < ($x + 2)) && ($x2 > ($x - 2))) {\n        $count++;\n    } else {\n        print \"$x : $x2\\n\";\n    }\n}\nprint $count . \"\\n\";\n// Now test the base form of log\nfor ($base = 2; $base < 11; $base++) {\n    for ($x = 0, $count= 0; $x < 50; $x++) {\n        $x2 = (int) pow($base, log($x, $base));\n        // base ^ log(x) should be close in range to x\n        if (($x2 < ($x + 2)) && ($x2 > ($x - 2))) {\n            $count++;\n        } else {\n             print \"base $base: $x : $x2\\n\";\n        }\n    }\n    print $count . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
