// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/list_keyed_evaluation_order_2.phpt
  it("list() with keys, evaluation order #2", function () {
    expect(parser.parseCode("<?php\n// All the following should print 'a' then 'b'\nlist($a, $b) = ['a', 'b'];\nvar_dump($a);\nvar_dump($b);\nlist(0 => $a, 1 => $b) = ['a', 'b'];\nvar_dump($a);\nvar_dump($b);\nlist(1 => $b, 0 => $a) = ['a', 'b'];\nvar_dump($a);\nvar_dump($b);\n$arr = [];\nlist($arr[], $arr[]) = ['a', 'b'];\nvar_dump($arr[0]);\nvar_dump($arr[1]);\n$arr = [];\nlist(0 => $arr[], 1 => $arr[]) = ['a', 'b'];\nvar_dump($arr[0]);\nvar_dump($arr[1]);\n$arr = [];\nlist(1 => $arr[], 0 => $arr[]) = ['b', 'a'];\nvar_dump($arr[0]);\nvar_dump($arr[1]);\n$arr = [];\nlist(list(1 => $arr[], 0 => $arr[])) = [['b', 'a']];\nvar_dump($arr[0]);\nvar_dump($arr[1]);\n$arr = [];\nlist('key1' => $arr[], 'key2' => $arr[]) = ['key2' => 'b', 'key1' => 'a'];\nvar_dump($arr[0]);\nvar_dump($arr[1]);\n// This should print 'foo'\n$a = 0;\nlist($a => $a) = ['foo', 'bar'];\nvar_dump($a);\n// This should print 'bar' then 'foo'\n$a = 0;\n$b = 1;\nlist($b => $a, $a => $c) = ['bar' => 'foo', 1 => 'bar'];\nvar_dump($a);\nvar_dump($c);\n?>")).toMatchSnapshot();
  });
});
