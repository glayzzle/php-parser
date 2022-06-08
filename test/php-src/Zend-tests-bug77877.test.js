// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug77877.phpt
  it("Bug #77877 call_user_func() passes $this to static methods", function () {
    expect(parser.parseCode("<?php\nclass Foo {\n    static public function bar() {\n        var_dump($this);\n    }\n}\ntry {\n    array_map([new Foo, 'bar'],[1]);\n} catch (Throwable $e) {\n    echo $e->getMessage() . \"\\n\";\n}\ntry {\n    call_user_func([new Foo, 'bar']);\n} catch (Throwable $e) {\n    echo $e->getMessage() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
