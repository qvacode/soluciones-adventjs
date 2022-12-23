export const executeCommands = (commands = []) => {
  let registers = [0, 0, 0, 0, 0, 0, 0, 0];

  let pointer = 0;

  let actions = {
    MOV: (value, memoryPointer) => {
      memoryPointer = +memoryPointer.replace(/V\d/, '');
      if (isNaN(+value)) {
        value = +value.replace(/V\d/, '');
        registers[memoryPointer] = registers[value];
      } else {
        registers[memoryPointer] = +value;
      }
      ++pointer;
    },
    DEC: memoryPointer => {
      memoryPointer = +memoryPointer.replace(/V\d/, '');
      registers[memoryPointer] = (((registers[memoryPointer] - 1) % 256) + 256) % 256;
      ++pointer;
    },
    INC: memoryPointer => {
      memoryPointer = +memoryPointer.replace(/V\d/, '');
      registers[memoryPointer] = (registers[memoryPointer] + 1) % 256;
      ++pointer;
    },
    ADD: (base, add) => {
      base = +base.replace(/V\d/, '');
      add = +add.replace(/V\d/, '');
      registers[base] = (registers[base] + registers[add]) % 256;
      ++pointer;
    },
    JMP: index => {
      pointer = registers[0] ? +index : pointer + 1;
    },
  };

  while (pointer < commands.length) {
    let [command, ...args] = commands[pointer].split(' ');
    args = args[0].split(',');
    actions[command](...args);
  }

  return registers;
};
