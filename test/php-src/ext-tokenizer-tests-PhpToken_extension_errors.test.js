// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/tokenizer/tests/PhpToken_extension_errors.phpt
  it("PhpToken extensions that throw during construction", function () {
    expect(parser.parseCode("<?php\nclass MyPhpToken1 extends PhpToken {\n    public $extra = UNKNOWN;\n}\ntry {\n    var_dump(MyPhpToken1::tokenize(\"<?php foo\"));\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\nabstract class MyPhpToken2 extends PhpToken {\n}\ntry {\n    var_dump(MyPhpToken2::tokenize(\"<?php foo\"));\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
