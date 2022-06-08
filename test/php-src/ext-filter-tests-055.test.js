// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/filter/tests/055.phpt
  it("filter_var() and FILTER_VALIDATE_MAC", function () {
    expect(parser.parseCode("<?php\n$values = Array(\n    array(\"01-23-45-67-89-ab\", 0),\n    array(\"01-23-45-67-89-ab\", array(\"options\" => array(\"separator\" => \"-\"))),\n    array(\"01-23-45-67-89-ab\", array(\"options\" => array(\"separator\" => \".\"))),\n    array(\"01-23-45-67-89-ab\", array(\"options\" => array(\"separator\" => \":\"))),\n    array(\"01-23-45-67-89-AB\", 0),\n    array(\"01-23-45-67-89-aB\", 0),\n    array(\"01:23:45:67:89:ab\", 0),\n    array(\"01:23:45:67:89:AB\", 0),\n    array(\"01:23:45:67:89:aB\", 0),\n    array(\"01:23:45-67:89:aB\", 0),\n    array(\"xx:23:45:67:89:aB\", 0),\n    array(\"0123.4567.89ab\", 0),\n    array(\"01-23-45-67-89-ab\", array(\"options\" => array(\"separator\" => \"--\"))),\n    array(\"01-23-45-67-89-ab\", array(\"options\" => array(\"separator\" => \"\"))),\n);\nforeach ($values as $value) {\n    try {\n        var_dump(filter_var($value[0], FILTER_VALIDATE_MAC, $value[1]));\n    } catch (ValueError $exception) {\n        echo $exception->getMessage() . \"\\n\";\n    }\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
