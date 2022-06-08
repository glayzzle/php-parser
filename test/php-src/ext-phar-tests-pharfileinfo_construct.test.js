// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/pharfileinfo_construct.phpt
  it("Phar: PharFileInfo::__construct", function () {
    expect(parser.parseCode("<?php\n$fname = __DIR__ . '/' . basename(__FILE__, '.php') . '.phar';\n$pname = 'phar://' . $fname;\ntry {\nfile_put_contents($fname, 'blah');\n$a = new PharFileInfo($pname . '/oops');\n} catch (Exception $e) {\necho $e->getMessage() . \"\\n\";\nunlink($fname);\n}\ntry {\n$a = new PharFileInfo(array());\n} catch (TypeError $e) {\necho $e->getMessage() . \"\\n\";\n}\n$a = new Phar($fname);\n$a['a'] = 'hi';\n$b = $a['a'];\ntry {\n$a = new PharFileInfo($pname . '/oops/I/do/not/exist');\n} catch (Exception $e) {\necho $e->getMessage() . \"\\n\";\n}\ntry {\n$b->__construct('oops');\n} catch (Exception $e) {\necho $e->getMessage() . \"\\n\";\n}\ntry {\n$a = new PharFileInfo(__FILE__);\n} catch (Exception $e) {\necho $e->getMessage() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
