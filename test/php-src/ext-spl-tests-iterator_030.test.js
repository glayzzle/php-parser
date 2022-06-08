// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/iterator_030.phpt
  it("SPL: EmptyIterator access", function () {
    expect(parser.parseCode("<?php\n$it = new EmptyIterator;\nvar_dump($it->valid());\n$it->rewind();\nvar_dump($it->valid());\n$it->next();\nvar_dump($it->valid());\ntry\n{\n    var_dump($it->key());\n}\ncatch(BadMethodCallException $e)\n{\n    echo $e->getMessage() . \"\\n\";\n}\ntry\n{\n    var_dump($it->current());\n}\ncatch(BadMethodCallException $e)\n{\n    echo $e->getMessage() . \"\\n\";\n}\nvar_dump($it->valid());\n?>")).toMatchSnapshot();
  });
});
