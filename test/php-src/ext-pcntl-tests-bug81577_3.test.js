// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pcntl/tests/bug81577_3.phpt
  it("Bug #81577: (Exceptions in interrupt handlers: cleanup_live_vars)", function () {
    expect(parser.parseCode("<?php\npcntl_async_signals(true);\npcntl_signal(SIGTERM, function ($signo) { throw new Exception(\"Signal\"); });\ntry {\n\tarray_merge([1], [2]) + posix_kill(posix_getpid(), SIGTERM);\n} catch (Throwable $ex) {\n\techo get_class($ex) , \" : \" , $ex->getMessage() , \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
