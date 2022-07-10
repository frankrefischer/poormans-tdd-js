
import { foo } from "./code.js";

const test_cases = [
    [foo, [0, 0], 0],
    [foo, [0, 1], 1],
    [foo, [1, 1], 2],
    [foo, [1, 1], 3],
];

test_cases.forEach(run_test_case);

function run_test_case(spec) {
    const func = spec[0]
    const args = spec[1]
    const expected = spec[2]
    const actual = func(...args)
    const spec_descr = func.name + "(" + args.join(', ') + ") == " + actual
    let tests = document.getElementById("tests")
    const li = make_li()
    if (actual == expected) {
        li.appendChild(text("OK : " + spec_descr + " == " + expected))
        li.style = "color:green"
    } else {
        li.appendChild(text("ERR: " + spec_descr + " != " + expected))    
        li.style = "color:red"
    }
    tests.appendChild(li)
}

function make_li(){
    return document.createElement("li");
}

function text(s) {
    return document.createTextNode(s);
}
