import express from 'express';
import cors from 'cors';

import { tokenize } from './lang/src/tokenization/tokenize.js';
import { generateAst } from './lang/src/parsing/ast.js';
import generate from '@babel/generator';
import { node } from 'compile-run';
const port = 3000;

const app = express();

// Middleware to parse JSON and urlencoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the "public" directory
app.use(express.static('public'));

// Enable CORS with specific options
app.use(
  cors({
    origin: '*',
    credentials: true,
  })
);

function traverseBFS (jsonTree) {
    let queue = [jsonTree]

    let res = []
    while (queue.length){
        if (queue[0].type === "Program"){
            res.push(queue[0].type)
            queue.push(...queue[0].body)
            queue[0].children = queue[0].body
            queue[0].name = queue[0].type
            delete queue[0].type
            delete queue[0].body
            queue.shift()
        }
        else if (queue[0].type === "VariableDeclaration"){
            res.push(queue[0].type)
            queue.push(...queue[0].declarations)
            queue[0].name = queue[0].type
            queue[0].children = queue[0].declarations
            queue[0].attributes = {kind : queue[0].kind}
            delete queue[0].type
            delete queue[0].declarations
            delete queue[0].kind
            queue.shift()
        }
        else if (queue[0].type === "VariableDeclarator"){
            res.push(queue[0].type)
            queue.push(queue[0].id)
            queue.push(queue[0].init)
            queue[0].name = queue[0].type
            queue[0].children = [queue[0].id,queue[0].init]
            delete queue[0].type
            delete queue[0].id
            delete queue[0].init
            queue.shift()
        }
        else if (queue[0].type === "Identifier"){
            res.push(queue[0].type)
            queue[0].attributes = {val : queue[0].type}
            delete queue[0].type
            queue.shift()
        }
        else if (queue[0].type === "NumericLiteral"){
            res.push(queue[0].type)
            queue[0].name = queue[0].type
            queue[0].attributes ={value : queue[0].value}
            delete queue[0].type
            delete queue[0].value
            queue.shift()
        }
        else if (queue[0].type === "StringLiteral"){
            res.push(queue[0].type)
            queue[0].name = queue[0].type
            queue[0].attributes = {value :queue[0].value}
            delete queue[0].type
            delete queue[0].value
            queue.shift()
        }
        else if (queue[0].type === "FunctionDeclaration"){
            res.push(queue[0].type)
            queue[0].name = queue[0].type
            queue.push(queue[0].id)
            queue.push(...queue[0].params)
            queue.push(queue[0].body)
            queue[0].children = [queue[0].id, queue[0].params,queue[0].body]
            delete queue[0].id
            delete queue[0].params
            delete queue[0].body
            queue.shift()
        }
        else if (queue[0].type === "BlockStatement"){
            res.push(queue[0].type)
            queue.push(...queue[0].body)
            queue[0].name = queue[0].type
            queue[0].children = queue[0].body
            delete queue[0].body
            delete queue[0].type
            queue.shift()
        }
        else if (queue[0].type === "ArrayExpression"){
            res.push(queue[0].type)
            queue.push(...queue[0].elements)
            queue[0].name = queue[0].type
            queue[0].children = queue[0].elements
            delete queue[0].type
            delete queue[0].elements
            queue.shift()
        }
        else if (queue[0].type === "IfStatement"){
            res.push(queue[0].type)
            queue.push(queue[0].test)
            queue.push(queue[0].consequent)
            queue.push(queue[0].alternate)
            queue[0].name = queue[0].type
            queue[0].children = [queue[0].test, queue[0].consequent, queue[0].alternate]
            delete queue[0].type
            delete queue[0].test
            delete queue[0].consequent
            delete queue[0].alternate
            queue.shift()
        }
        else if (queue[0].type === "BinaryExpression"){
            res.push(queue[0].type)
            queue.push(queue[0].left)
            queue[0].attributes = {value :queue[0].operator}
            queue.push(queue[0].right)
            queue[0].name = queue[0].type
            queue[0].children = [queue[0].left , queue[0].right]
            delete queue[0].type
            delete queue[0].left
            delete queue[0].right
            queue.shift()
        }
        else if (queue[0].type === "LogicalExpression"){
            res.push(queue[0].type)
            queue.push(queue[0].left)
            queue[0].attributes = {value :queue[0].operator}
            queue.push(queue[0].right)
            queue[0].name = queue[0].type
            queue[0].children = [queue[0].left , queue[0].right]
            delete queue[0].type
            delete queue[0].left
            delete queue[0].right
            queue.shift()
        }
        else if (queue[0].type === "ExpressionStatement"){
            res.push(queue[0].type)
            queue.push(queue[0].expression)
            queue[0].name = queue[0].type
            queue[0].children = [queue[0].expression]
            delete queue[0].type
            delete queue[0].expression
            queue.shift()
        }
        else if (queue[0].type === "CallExpression"){
            res.push(queue[0].type)
            queue.push(queue[0].callee)
            queue.push(...queue[0].arguments)
            queue[0].name = queue[0].type
            queue[0].children = [queue[0].callee , queue[0].arguments]
            delete queue[0].type
            delete queue[0].callee
            delete queue[0].arguments
            queue.shift()
        }
        else if (queue[0].type === "MemberExpression"){
            res.push(queue[0].type)
            queue.push(queue[0].object)
            queue.push(queue[0].property)
            queue[0].name = queue[0].type
            queue[0].children = [queue[0].object , queue[0].property]
            delete queue[0].type
            delete queue[0].object
            delete queue[0].property
            queue.shift()
        }
        else if (queue[0].type === "AssignmentExpression"){
            res.push(queue[0].type)
            queue.push(queue[0].left)
            queue[0].attributes = {operator :queue[0].operator}
            queue.push(queue[0].right)
            queue[0].name = queue[0].type
            queue[0].children = [queue[0].left , queue[0].right]
            delete queue[0].type
            delete queue[0].left
            delete queue[0].right
            queue.shift()
        }
        else if (queue[0].type === "ReturnStatement"){
            res.push(queue[0].type)
            queue.push(queue[0].argument)
            queue[0].name = queue[0].type
            queue[0].children = [queue[0].argument]
            delete queue[0].type
            delete queue[0].argument
            queue.shift()
        }
        else if (queue[0].type === "BooleanLiteral"){
            res.push(queue[0].type)
            queue[0].name = queue[0].type
            queue[0].attributes = {value :queue[0].value}
            delete queue[0].type
            delete queue[0].value
            queue.shift()
        }
        else if (queue[0].type === "ObjectExpression"){
            res.push(queue[0].type)
            queue.push(...queue[0].properties)
            queue[0].name = queue[0].type
            queue[0].children = queue[0].properties
            delete queue[0].type
            delete queue[0].properties
            queue.shift()
        }
        else if (queue[0].type === "ObjectProperty"){
            res.push(queue[0].type)
            queue.push(queue[0].key)
            queue.push(queue[0].value)
            queue[0].name = queue[0].type
            queue[0].children = [queue[0].key , queue[0].value]
            delete queue[0].type
            delete queue[0].key
            delete queue[0].value
            queue.shift()
        }
        else if (queue[0].type === "ForStatement"){
            res.push(queue[0].type)
            queue.push(queue[0].init)
            queue.push(queue[0].test)
            queue.push(queue[0].update)
            queue.push(queue[0].body)
            queue[0].name = queue[0].type
            queue[0].children = [queue[0].init , queue[0].test, queue[0].update , queue[0].body]
            delete queue[0].type
            delete queue[0].init
            delete queue[0].test
            delete queue[0].update
            delete queue[0].body
            queue.shift()
        }
    }
    return jsonTree
}

app.post('/api/output', async (req, res) => {
  try {
    const code = req.body.formatedCodeInput;

    // Tokenize the code
    const generatedTokens = await tokenize(code);

    // Generate Abstract Syntax Tree (AST)
    let ast = await generateAst(generatedTokens);

    // Convert AST to JavaScript code
    let jsCode = generate.default(ast).code;

    // Example: Running a simple JavaScript code using compile-run
    
    const result = await node.runSource(jsCode);
    const final = result.stdout  ;
    const astree = traverseBFS(ast)


    res.status(200).send({ jsCode, final,ast,astree });
  } catch (error) {
    // Handle errors and send a meaningful response
    const { message, stack, name } = error;
    res.status(500).send({ error: { message, stack, name } });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});


