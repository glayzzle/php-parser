// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/default_value_internal_userland_arginfo.phpt
  it("Fetching default value of an internal trampoline function with userland arginfo", function () {
    expect(parser.parseCode("<?php\n$closure = function ($b = 0) {};\n$ro = new ReflectionObject($closure);\n$rm = $ro->getMethod('__invoke');\necho $rm, \"\\n\";\n$rp = $rm->getParameters()[0];\nvar_dump($rp->isDefaultValueAvailable());\ntry {\n    var_dump($rp->getDefaultValue());\n} catch (ReflectionException $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
