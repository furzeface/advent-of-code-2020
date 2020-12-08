import { puzzleInputToArray } from "../utils";

const runProgram = (input: string) => {
let accumulator = 0
	const instructions = puzzleInputToArray(input);

	/*
acc increases or decreases a single global value called the accumulator by the value given in the argument. For example, acc +7 would increase the accumulator by 7. The accumulator starts at 0. After an acc instruction, the instruction immediately below it is executed next.

jmp jumps to a new instruction relative to itself. The next instruction to execute is found using the argument as an offset from the jmp instruction; for example, jmp +2 would skip the next instruction, jmp +1 would continue to the instruction immediately below it, and jmp -20 would cause the instruction 20 lines above to be executed next.

nop stands for No OPeration - it does nothing. The instruction immediately below it is executed next.
	*/
	const actions = {
		acc:(value,i)=>{
			accumulator= accumulator+value
			console.log('acc',value, accumulator);
			return i+1
		},
		jmp: (value,i)=>{
			console.log('jmp',value);
			return i+value
		},
		nop: (i)=>{
			return i+1
		}
	}

	let nextInstruction=0

	for (let i = 0; i <= instructions.length;i++) {
		const currentInstruction = instructions[i]
		const [action,value]=currentInstruction.split(" ")

		nextInstruction = actions[action](parseInt(value,10), i)
		console.log('nextInstruction',nextInstruction);


	}

	return accumulator;
};

export { runProgram };
