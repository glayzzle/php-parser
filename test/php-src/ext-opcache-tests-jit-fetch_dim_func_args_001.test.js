// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/fetch_dim_func_args_001.phpt
  it("JIT FETCH_DIM_FUNC_ARG: 001", function () {
    expect(parser.parseCode("<?php\nnamespace A;\nclass A {\n    public function change(array $config) {\n        $config['keys'] = array_keys($config[\"a\"]);;\n    }\n}\n$a = new A();\n$a->change($a = array(\"a\" => range(1, 5)));\n?>\nokey")).toMatchSnapshot();
  });
});
