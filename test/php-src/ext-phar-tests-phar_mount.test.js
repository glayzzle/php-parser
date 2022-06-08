// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/phar_mount.phpt
  it("Phar: Phar::mount", function () {
    expect(parser.parseCode("<?php\n$fname = dirname(__FILE__) . '/' . basename(__FILE__, '.php') . '.phar.php';\n$pname = 'phar://' . $fname;\n$fname2 = dirname(__FILE__) . '/' . basename(__FILE__, '.php') . '.phar.tar';\n$a = new Phar($fname);\n$a['index.php'] = '<?php\nPhar::mount(\"testit\", \"' . addslashes(__FILE__) . '\");\ntry {\nPhar::mount(\"testit\", \"' . addslashes(__FILE__) . '\");\n} catch (Exception $e) {\necho $e->getMessage() . \"\\n\";\n}\ntry {\nPhar::mount(\"' . addslashes($pname) . '/testit1\", \"' . addslashes(__FILE__) . '\");\n} catch (Exception $e) {\necho $e->getMessage() . \"\\n\";\n}\n?>';\n$a->setStub('<?php\nset_include_path(\"phar://\" . __FILE__);\ninclude \"index.php\";\n__HALT_COMPILER();');\nPhar::mount($pname . '/testit1', __FILE__);\ninclude $fname;\n// test copying of a phar with mounted entries\n$b = $a->convertToExecutable(Phar::TAR);\n$b->setStub('<?php\nset_include_path(\"phar://\" . __FILE__);\ninclude \"index.php\";\n__HALT_COMPILER();');\ntry {\ninclude $fname2;\n} catch (Exception $e) {\necho $e->getMessage(),\"\\n\";\n}\ntry {\nPhar::mount($pname . '/oops', '/home/oops/../../etc/passwd:');\n} catch (Exception $e) {\necho $e->getMessage(),\"\\n\";\n}\nPhar::mount($pname . '/testit2', $pname . '/testit1');\necho substr($a['testit2']->getContent(),0, 50),\"\\n\";\n?>")).toMatchSnapshot();
  });
});
