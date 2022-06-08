// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/array_unpack/basic.phpt
  it("Basic array unpacking", function () {
    expect(parser.parseCode("<?php\n$array = [1, 2, 3];\nfunction getArr() {\n    return [4, 5];\n}\nfunction arrGen() {\n    for($i = 11; $i < 15; $i++) {\n        yield $i;\n    }\n}\nvar_dump([...[]]);\nvar_dump([...[1, 2, 3]]);\nvar_dump([...$array]);\nvar_dump([...getArr()]);\nvar_dump([...arrGen()]);\nvar_dump([...new ArrayIterator(['a', 'b', 'c'])]);\nvar_dump([0, ...$array, ...getArr(), 6, 7, 8, 9, 10, ...arrGen()]);\nvar_dump([0, ...$array, ...$array, 'end']);\n?>")).toMatchSnapshot();
  });
});
