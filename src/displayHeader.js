const colors = require('colors');

function displayHeader() {
  process.stdout.write('\x1Bc');
  console.log(colors.cyan('========================================================='));
  console.log(colors.cyan('========================================================='));
  console.log(colors.cyan('================ unit0-BOT-JAWA-PRIDE  =================='));
  console.log(colors.cyan('=============== Created by JAWA-PRIDE  =================='));
  console.log(colors.cyan('=========== https://t.me/AirdropJP_JawaPride ============'));
  console.log(colors.cyan('========================================================='));
  console.log(colors.cyan('========================================================='));
  console.log();
}

module.exports = displayHeader;
