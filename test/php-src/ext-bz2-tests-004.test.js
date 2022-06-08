// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/bz2/tests/004.phpt
  it("bzread() tests with invalid files", function () {
    expect(parser.parseCode("<?php\n$fd = bzopen(__DIR__.\"/004_1.txt.bz2\",\"r\");\nvar_dump(bzerror($fd));\nvar_dump(bzerrstr($fd));\nvar_dump(bzerrno($fd));\n$fd2 = bzopen(__DIR__.\"/004_2.txt.bz2\",\"r\");\nvar_dump(bzerror($fd2));\nvar_dump(bzerrstr($fd2));\nvar_dump(bzerrno($fd2));\nvar_dump(bzread($fd, 10));\nvar_dump(bzerror($fd));\nvar_dump(bzerrstr($fd));\nvar_dump(bzerrno($fd));\nvar_dump(bzread($fd2, 10));\nvar_dump(bzerror($fd2));\nvar_dump(bzerrstr($fd2));\nvar_dump(bzerrno($fd2));\nvar_dump(bzread($fd));\nvar_dump(bzerror($fd));\nvar_dump(bzerrstr($fd));\nvar_dump(bzerrno($fd));\nvar_dump(bzread($fd2));\nvar_dump(bzerror($fd2));\nvar_dump(bzerrstr($fd2));\nvar_dump(bzerrno($fd2));\nbzclose($fd2);\ntry {\n    var_dump(bzread($fd2));\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    var_dump(bzerror($fd2));\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    var_dump(bzerrstr($fd2));\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    var_dump(bzerrno($fd2));\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
