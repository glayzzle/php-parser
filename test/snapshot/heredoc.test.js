const parser = require("../main");

describe("heredoc", function() {
    it("simple", function() {
        expect(
            parser.parseEval(`
echo <<<EOD
Example of string
spanning multiple lines
using heredoc syntax.
EOD;
    `)
        ).toMatchSnapshot();
    });

    it("with space between <<< and label", function() {
        expect(
            parser.parseEval(`
echo <<<     EOD
Example of string
spanning multiple lines
using heredoc syntax.
EOD;
    `)
        ).toMatchSnapshot();
    });

    it("with double quotes", function() {
        expect(
            parser.parseEval(`
echo <<<"EOD"
Example of string
spanning multiple lines
using heredoc syntax.
EOD;
    `)
        ).toMatchSnapshot();
    });

    it("with variables", function() {
        expect(
            parser.parseEval(`
echo <<<EOT
My name is "$name". I am printing some $foo->foo.
Now, I am printing some {$foo->bar[1]}.
This should print a capital 'A': \x41
EOT;
    `)
        ).toMatchSnapshot();
    });

    it("inside call", function() {
        expect(
            parser.parseEval(`
var_dump(array(<<<EOD
foobar!
EOD
));
    `)
        ).toMatchSnapshot();
    });

    it("inside function", function() {
        expect(
            parser.parseEval(`
function foo()
{
    static $bar = <<<LABEL
Nothing in here...
LABEL;
}
    `)
        ).toMatchSnapshot();
    });

    it("inside class", function() {
        expect(
            parser.parseEval(`
class foo {
    const BAR = <<<FOOBAR
Constant example
FOOBAR;

    public $baz = <<<FOOBAR
Property example
FOOBAR;
}
    `)
        ).toMatchSnapshot();
    });

    it("empty", function() {
        expect(
            parser.parseEval(`
echo <<<TEST
TEST;
    `)
        ).toMatchSnapshot();
    });

    it("only newline", function() {
        expect(
            parser.parseEval(`
echo <<<TEST

TEST;
    `)
        ).toMatchSnapshot();
    });
});
