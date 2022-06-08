// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/arrayObject___construct_error1.phpt
  it("SPL: ArrayObject::__construct with bad iterator.", function () {
    expect(parser.parseCode("<?php\necho \"Bad iterator type:\\n\";\n$a = new stdClass;\n$a->p = 1;\ntry {\n  var_dump(new ArrayObject($a, 0, \"Exception\"));\n} catch (TypeError $e) {\n  echo $e->getMessage() . \"(\" . $e->getLine() .  \")\\n\";\n}\necho \"Non-existent class:\\n\";\ntry {\n  var_dump(new ArrayObject(new stdClass, 0, \"nonExistentClassName\"));\n} catch (TypeError $e) {\n  echo $e->getMessage() . \"(\" . $e->getLine() .  \")\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
