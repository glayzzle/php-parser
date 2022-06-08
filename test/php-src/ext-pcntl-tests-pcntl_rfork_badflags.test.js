// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pcntl/tests/pcntl_rfork_badflags.phpt
  it("Test function pcntl_rfork() with wrong flags", function () {
    expect(parser.parseCode("<?php\necho \"\\n*** Test with RFMEM ***\\n\";\ntry {\n\t$pid = pcntl_rfork(32);\n} catch (ValueError $e) {\n\techo $e;\n}\necho \"\\n*** Test with RFSIGSHARE ***\\n\";\ntry {\n\t$pid = pcntl_rfork(16384);\n} catch (ValueError $e) {\n\techo $e;\n}\necho \"\\n*** Test with RFFDG|RFCFDG ***\\n\";\ntry {\n\t$pid = pcntl_rfork(RFFDG|RFCFDG);\n} catch (ValueError $e) {\n\techo $e;\n}\n?>")).toMatchSnapshot();
  });
});
