// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pcntl/tests/bug81577_2.phpt
  it("Bug #81577: (Exceptions in interrupt handlers: ADD_ARRAY_ELEMENT)", function () {
    expect(parser.parseCode("<?php\npcntl_async_signals(true);\npcntl_signal(SIGTERM, function ($signo) {});\ntry {\n\t$a = [1, posix_kill(posix_getpid(), SIGTERM), 2];\n} catch (Throwable $ex) {\n\techo get_class($ex) , \" : \" , $ex->getMessage() , \"\\n\";\n}\nvar_dump($a);\n?>")).toMatchSnapshot();
  });
});
