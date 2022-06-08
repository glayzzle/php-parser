// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionEnum_construct.phpt
  it("ReflectionEnum::__construct()", function () {
    expect(parser.parseCode("<?php\nenum Foo {}\nclass Bar {}\necho (new ReflectionEnum(Foo::class))->getName() . \"\\n\";\ntry {\n    new ReflectionEnum('Bar');\n} catch (\\Exception $e) {\n    echo $e->getMessage() . \"\\n\";\n}\ntry {\n    new ReflectionEnum('Baz');\n} catch (\\Exception $e) {\n    echo $e->getMessage() . \"\\n\";\n}\ntry {\n    new ReflectionEnum([]);\n} catch (Error $e) {\n    echo $e->getMessage() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
