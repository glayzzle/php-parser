// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pcntl/tests/pcntl_signal.phpt
  it("pcntl_signal()", function () {
    expect(parser.parseCode("<?php\npcntl_signal(SIGTERM, function($signo){\n    echo \"signal dispatched\\n\";\n});\nposix_kill(posix_getpid(), SIGTERM);\npcntl_signal_dispatch();\npcntl_signal(SIGUSR1, function($signo, $siginfo){\n    printf(\"got signal from %s\\n\", $siginfo['pid'] ?? 'nobody');\n});\nposix_kill(posix_getpid(), SIGUSR1);\npcntl_signal_dispatch();\nvar_dump(pcntl_signal(SIGALRM, SIG_IGN));\ntry {\n    pcntl_signal(-1, -1);\n} catch (ValueError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\ntry {\n    pcntl_signal(-1, function(){});\n} catch (ValueError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\ntry {\n    pcntl_signal(SIGALRM, \"not callable\");\n} catch (TypeError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\n/* test freeing queue in RSHUTDOWN */\nposix_kill(posix_getpid(), SIGTERM);\necho \"ok\\n\";\n?>")).toMatchSnapshot();
  });
});
