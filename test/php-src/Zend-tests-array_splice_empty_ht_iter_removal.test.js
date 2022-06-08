// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/array_splice_empty_ht_iter_removal.phpt
  it("HT iterator should be destroyed if array becomes empty during array_splice", function () {
    expect(parser.parseCode("<?php\n$a=[4];\n$i = 0;\nforeach ($a as &$r) {\n    var_dump($r);\n    $a = array_splice($a, 0);\n    if (++$i == 2) break;\n}\n?>")).toMatchSnapshot();
  });
});
