// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/arrayObject___construct_error2.phpt
  it("SPL: ArrayObject::__construct with too many arguments.", function () {
    expect(parser.parseCode("<?php\necho \"Too many arguments:\\n\";\nClass C implements Iterator {\n    function current(): mixed {}\n    function next(): void {}\n    function key(): mixed {}\n    function valid(): bool {}\n    function rewind(): void {}\n}\ntry {\n  var_dump(new ArrayObject(new stdClass, 0, \"C\", \"extra\"));\n} catch (TypeError $e) {\n  echo $e->getMessage() . \"(\" . $e->getLine() .  \")\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
