// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/bug80447.phpt
  it("Bug #80447 (Strange out of memory error when running with JIT)", function () {
    expect(parser.parseCode("<?php\nfunction createTree($depth) {\n    if (!$depth) {\n        return [null, null];\n    }\n    $depth--;\n    return [\n        createTree($depth),\n        createTree($depth)\n    ];\n}\nfunction checkTree($treeNode) {\n    return 1\n        + ($treeNode[0][0] === null ? 1 : checkTree($treeNode[0]))\n        + ($treeNode[1][0] === null ? 1 : checkTree($treeNode[1]));\n}\n$tree = createTree(12);\nvar_dump(checkTree($tree));")).toMatchSnapshot();
  });
});
