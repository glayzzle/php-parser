// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/iterator_027.phpt
  it("SPL: CachingIterator::FULL_CACHE", function () {
    expect(parser.parseCode("<?php\n$ar = array(1, 2, array(31, 32, array(331)), 4);\n$it = new RecursiveArrayIterator($ar);\n$it = new RecursiveIteratorIterator($it);\n$it = new CachingIterator($it, CachingIterator::FULL_CACHE);\nforeach($it as $k=>$v)\n{\n    echo \"$k=>$v\\n\";\n}\necho \"===CHECK===\\n\";\nfor ($i = 0; $i < 4; $i++)\n{\n    if (isset($it[$i]))\n    {\n        var_dump($i, $it[$i]);\n    }\n}\n$it[2] = 'foo';\n$it[3] = 'bar';\n$it['baz'] = '25';\nvar_dump($it[2]);\nvar_dump($it[3]);\nvar_dump($it['baz']);\nunset($it[0]);\nunset($it[2]);\nunset($it['baz']);\nvar_dump(isset($it[0])); // unset\nvar_dump(isset($it[1])); // still present\nvar_dump(isset($it[2])); // unset\nvar_dump(isset($it[3])); // still present\nvar_dump(isset($it['baz']));\necho \"===REWIND===\\n\";\n$it->rewind(); // cleans and reads first element\nvar_dump(isset($it[0])); // pre-fetched\nvar_dump(isset($it[1])); // deleted\nvar_dump(isset($it[2])); // unset\nvar_dump(isset($it[3])); // deleted\n?>")).toMatchSnapshot();
  });
});
