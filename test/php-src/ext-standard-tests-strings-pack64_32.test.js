// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/pack64_32.phpt
  it("64bit pack()/unpack() tests", function () {
    expect(parser.parseCode("<?php\ntry {\n    var_dump(pack(\"Q\", 0));\n} catch (ValueError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    var_dump(pack(\"J\", 0));\n} catch (ValueError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    var_dump(pack(\"P\", 0));\n} catch (ValueError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    var_dump(pack(\"q\", 0));\n} catch (ValueError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    var_dump(unpack(\"Q\", ''));\n} catch (ValueError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    var_dump(unpack(\"J\", ''));\n} catch (ValueError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    var_dump(unpack(\"P\", ''));\n} catch (ValueError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    var_dump(unpack(\"q\", ''));\n} catch (ValueError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
