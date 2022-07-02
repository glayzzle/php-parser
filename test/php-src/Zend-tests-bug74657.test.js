// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug74657.phpt
  it("Bug #74657 (Undefined constants in array properties result in broken properties)", function () {
    expect(parser.parseCode("<?php\ninterface I {\n}\nclass C {\n    const FOO = I::FOO;\n    public $options = [self::FOO => \"bar\"];\n}\ntry {\n    var_dump((new C)->options);\n} catch (Throwable $e) {}\nvar_dump((new C)->options);\n?>")).toMatchSnapshot();
  });
});
