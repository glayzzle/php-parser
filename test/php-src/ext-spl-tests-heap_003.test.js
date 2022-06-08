// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/heap_003.phpt
  it("SPL: SplHeap: comparison callback", function () {
    expect(parser.parseCode("<?php\nclass myHeap extends SplHeap {\n    public function compare($a, $b): int {\n        if ($a > $b) {\n            $result = 1;\n        } else if ($a < $b) {\n            $result = -1;\n        } else {\n            $result = 0;\n        }\n        return $result;\n    }\n}\n$h = new myHeap;\n$in = range(0,10);\nshuffle($in);\nforeach ($in as $i) {\n    $h->insert($i);\n}\nforeach ($h as $out) {\n    echo $out.\"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
