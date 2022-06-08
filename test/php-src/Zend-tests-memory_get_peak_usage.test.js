// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/memory_get_peak_usage.phpt
  it("int memory_get_peak_usage ([ bool $real_usage = false ] );", function () {
    expect(parser.parseCode("<?php\nvar_dump($a = memory_get_peak_usage());\nvar_dump(memory_get_peak_usage(true));\nvar_dump(memory_get_peak_usage(false));\n$array = range(1,1024*1024);\nvar_dump(memory_get_peak_usage() > $a);\n?>")).toMatchSnapshot();
  });
});
