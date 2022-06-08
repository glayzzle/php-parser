// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug61527.phpt
  it("Bug #61527 (Recursive/ArrayIterator gives misleading notice when array empty or moved to the end)", function () {
    expect(parser.parseCode("<?php\n$ao = new ArrayObject(array());\n$ai = $ao->getIterator();\n/* testing empty array, should no notice at all */\n$ai->next();\nvar_dump($ai->key());\nvar_dump($ai->current());\n/* testing array changing */\n$ao2 = new ArrayObject(array(1 => 1, 2, 3, 4, 5));\n$ai2 = $ao2->getIterator();\n$ao2->offsetUnset($ai2->key());\n$ai2->next();\n/* now point to 2 */\n$ao2->offsetUnset($ai2->key());\nvar_dump($ai2->key());\n/* now point to 3 */\n$ao2->offsetUnset($ai2->key());\nvar_dump($ai2->current());\n$ai2->next();\nvar_dump($ai2->key());\nvar_dump($ai2->current());\n/* should be at the end and no notice */\n$ai2->next();\nvar_dump($ai2->key());\nvar_dump($ai2->current());\n$ai2->rewind();\n$ai2->next();\n$ai2->next();\n/* should reached the end */\nvar_dump($ai2->next());\nvar_dump($ai2->key());\n/* testing RecursiveArrayIterator */\n$ao3 = new ArrayObject(array(), 0, 'RecursiveArrayIterator');\n$ai3 = $ao3->getIterator();\nvar_dump($ai3->getChildren());\n$ao4 = new ArrayObject(array(1, 2), 0, 'RecursiveArrayIterator');\n$ai4 = $ao4->getIterator();\n$ai4->next();\n$ai4->next();\n$ai4->next();\nvar_dump($ai4->hasChildren());\n$ai4->rewind();\n$ao4->offsetUnset($ai4->key());\nvar_dump($ai4->hasChildren());\n$ao4->offsetUnset($ai4->key());\nvar_dump($ai4->getChildren());\n?>\n==DONE==\n<?php exit(0); ?>")).toMatchSnapshot();
  });
});
