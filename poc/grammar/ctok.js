const tokenizer = function(str) {
    let tokens = [];
    let state = 0;
    let token = null;
    var flush = function(nextState, init) {
        if (state === nextState) {
            token += init;
        } else {
            if (token) {
                tokens.push([state, token]);
            }
            state = nextState;
            token = init;
        }
    }
    for(let i = 0; i < str.length; i++) {
        let char = str[i];
        if (char === ' ' || char === '\t' || char === '\r' || char === '\n') {
            if (state === tokenizer.STATE_WS) {
                token += char;
            } else {
                flush(tokenizer.STATE_WS, char);
            }
            continue;
        } 
        if (char === '"') {
            flush(tokenizer.STATE_TXT, char);
            while(i < str.length) {
                if (str[++i] === "\\") {
                    i++;
                    token += "\\" + str[i];
                } else {
                    token += str[i];
                }
                if (str[i] === '"') break;
            }
            flush();
            continue;
        } 
        if (char === '\'') {
            flush(tokenizer.STATE_TXT, char);
            while(i < str.length) {
                if (str[++i] === "\\") {
                    i++;
                    token += "\\" + str[i];
                } else {
                    token += str[i];
                }
                if (str[i] === '\'') break;
            }
            flush();
            continue;
        } 
        
        let ch = str.charCodeAt(i);
        if (
          (ch > 96 && ch < 123) ||
          (ch > 64 && ch < 91) ||
          ch === 95 ||
          (ch > 47 && ch < 58) ||
          ch > 126
        ) {
            if (state === tokenizer.STATE_ID) {
                token += char;
            } else {
                flush(tokenizer.STATE_ID, char);
            }
            continue;
        }

        if (token === '/') {
            let next = str[i + 1];
            if (next === '/') {
                flush(tokenizer.STATE_COM, char);
                while(i < str.length) {
                    token += str[++i];
                    if (str[i] === '\r') break;
                    if (str[i] === '\n') break;
                }
                flush();
                continue;
            }
            if (next === '*') {
                flush(tokenizer.STATE_COM, char);
                while(i < str.length) {
                    token += str[++i];
                    if (str[i] === '*') {
                        token += str[++i];
                        if (str[i] === '/') break;
                    }
                }
                flush();
                continue;
            }
        }

        if (token === '#') {
            flush(tokenizer.STATE_DIR, char);
            while(i < str.length) {
                token += str[++i];
                if (str[i] === '\r') break;
                if (str[i] === '\n') break;
            }
            flush();
            continue;            
        }
        if (token) {
            flush(tokenizer.STATE_OTHER, null);
        }
        tokens.push([tokenizer.STATE_OTHER, char]);
    }
    flush();
    return tokens;
};

tokenizer.STATE_WS = "whitespace";
tokenizer.STATE_ID = "identifier";
tokenizer.STATE_COM = "comment";
tokenizer.STATE_TXT = "string";
tokenizer.STATE_OTHER = "any";
tokenizer.STATE_DIR = "directive";

module.exports = tokenizer;