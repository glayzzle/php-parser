// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/int_static_prop_name.phpt
  it("Using an integer as a static property name", function () {
    expect(parser.parseCode("<?php\nclass Foo {\n    public static $bar = 42;\n}\n$n = 42;\n${42} = 24;\nvar_dump(${42});\nvar_dump(${(int) 42});\nvar_dump(${(int) $n});\ntry {\n    var_dump(Foo::${42});\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    var_dump(Foo::${(int) 42});\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    var_dump(Foo::${(int) $n});\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
