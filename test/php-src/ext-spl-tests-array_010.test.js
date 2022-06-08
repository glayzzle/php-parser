// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/array_010.phpt
  it("SPL: ArrayIterator implements ArrayAccess", function () {
    expect(parser.parseCode("<?php\n$obj = new ArrayObject(array('1st', 1, 2=>'3rd', '4th'=>4));\nvar_dump($obj->getArrayCopy());\necho \"===EMPTY===\\n\";\nvar_dump(empty($obj[0]));\nvar_dump(empty($obj[1]));\nvar_dump(empty($obj[2]));\nvar_dump(empty($obj['4th']));\nvar_dump(empty($obj['5th']));\nvar_dump(empty($obj[6]));\necho \"===isset===\\n\";\nvar_dump(isset($obj[0]));\nvar_dump(isset($obj[1]));\nvar_dump(isset($obj[2]));\nvar_dump(isset($obj['4th']));\nvar_dump(isset($obj['5th']));\nvar_dump(isset($obj[6]));\necho \"===offsetGet===\\n\";\nvar_dump($obj[0]);\nvar_dump($obj[1]);\nvar_dump($obj[2]);\nvar_dump($obj['4th']);\nvar_dump($obj['5th']);\nvar_dump($obj[6]);\necho \"===offsetSet===\\n\";\necho \"WRITE 1\\n\";\n$obj[1] = 'Changed 1';\nvar_dump($obj[1]);\necho \"WRITE 2\\n\";\n$obj['4th'] = 'Changed 4th';\nvar_dump($obj['4th']);\necho \"WRITE 3\\n\";\n$obj['5th'] = 'Added 5th';\nvar_dump($obj['5th']);\necho \"WRITE 4\\n\";\n$obj[6] = 'Added 6';\nvar_dump($obj[6]);\nvar_dump($obj[0]);\nvar_dump($obj[2]);\n$x = $obj[6] = 'changed 6';\nvar_dump($obj[6]);\nvar_dump($x);\necho \"===unset===\\n\";\nvar_dump($obj->getArrayCopy());\nunset($obj[2]);\nunset($obj['4th']);\nunset($obj[7]);\nunset($obj['8th']);\nvar_dump($obj->getArrayCopy());\n?>")).toMatchSnapshot();
  });
});
