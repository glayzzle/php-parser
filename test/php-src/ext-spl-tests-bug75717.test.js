// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug75717.phpt
  it("Bug #75717: RecursiveArrayIterator does not traverse arrays by reference", function () {
    expect(parser.parseCode("<?php\nfunction flatten(array $nestedArraysAndStrings){\n    $flat=[];\n    $iter = new RecursiveIteratorIterator(\n        new RecursiveArrayIterator($nestedArraysAndStrings));\n    foreach($iter as $leaf){ $flat[] = $leaf; }\n    return join('', $flat);\n}\n$noRefs = [[[['some']]],[' nested '],\"items\"];\n$withRefs = []+$noRefs;\n$wat = $noRefs[0];\n$withRefs[0] = &$wat;\necho flatten($noRefs), \"\\n\";\necho flatten($withRefs), \"\\n\";\n?>")).toMatchSnapshot();
  });
});
