// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/ArrayObject_sort_different_backing_storage.phpt
  it("Test sorting of various ArrayObject backing storage", function () {
    expect(parser.parseCode("<?php\n$obj = (object)['a' => 2, 'b' => 1];\n$ao = new ArrayObject($obj);\n$ao->uasort(function($a, $b) { return $a <=> $b; });\nvar_dump($ao);\n$ao2 = new ArrayObject($ao);\n$ao2->uasort(function($a, $b) { return $b <=> $a; });\nvar_dump($ao2);\n$ao3 = new ArrayObject();\n$ao3->exchangeArray($ao3);\n$ao3->a = 2;\n$ao3->b = 1;\n$ao3->uasort(function($a, $b) { return $a <=> $b; });\nvar_dump($ao3);\n$ao4 = new ArrayObject([]);\n$ao4->uasort(function($a, $b) { return $a <=> $b; });\nvar_dump($ao4);\n$ao5 = new ArrayObject(['a' => 2, 'b' => 1]);\n$ao5->uasort(function($a, $b) { return $a <=> $b; });\nvar_dump($ao5);\n?>")).toMatchSnapshot();
  });
});
