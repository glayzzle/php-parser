// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionFunction_isDisabled_basic.phpt
  it("ReflectionFunction::isDisabled", function () {
    expect(parser.parseCode("<?php\ntry {\n    $rf = new ReflectionFunction('is_file');\n    var_dump($rf->isDisabled());\n} catch (ReflectionException $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n$rf = new ReflectionFunction('is_string');\nvar_dump($rf->isDisabled());\n?>")).toMatchSnapshot();
  });
});
