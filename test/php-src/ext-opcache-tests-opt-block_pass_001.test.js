// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/opt/block_pass_001.phpt
  it("Block Pass 001: QM_ASSIGN and DECLARE_LAMBDA_FUNCTION", function () {
    expect(parser.parseCode("<?php\nabstract class Broadcaster {\n    protected function normalizeChannelHandlerToCallable($callback)\n        {\n            return is_callable($callback) ? $callback : function (...$args) use ($callback) {\n                return Container::getInstance()\n                    ->make($callback)\n                ->join(...$args);\n        };\n    }\n}\n?>\nOK")).toMatchSnapshot();
  });
});
