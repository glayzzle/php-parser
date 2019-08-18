const parser = require("./main");

describe("Test AST class (edge cases)", function() {
    it("test source without location", function() {
        const test = parser.create({
            ast: {
                withPositions: false,
                withSource: true
            }
        });
        const ast = test.parseEval('echo $foo;');
        const echo = ast.children[0];
        expect(echo.loc.source).toBe("echo $foo;");
        expect(echo.loc.start).toBeNull();
        expect(echo.loc.end).toBeNull();

        const variable = echo.expressions[0];
        expect(variable.loc.source).toBe("$foo");
    });
    it("test undefined node", function() {
        const test = parser.create();
        expect(() => {
            const node = test.parser.node('foo');
            node();
        }).toThrow(/foo/);
    });    
});