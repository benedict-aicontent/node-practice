// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question("Enter your name: ", (name) => {

//   rl.question("Enter your monthly sales: ", (sales) => {

//     rl.question("What is you monthly sales target? ", (target) => {

//         const commission = calculateCommission(Number(sales));

//         const result = checkTarget(
//           Number(sales),
//           Number(target)
//         );

//         console.log(`Commission: ₱${commission}`);
//         console.log(result);

//         rl.close();
//     });
//   });

// });

function calculateCommission(sales) {
  if (sales < 100000) {
    return sales * 0.03;
  }else if (sales >= 100000 && sales < 299999) {
    return sales * 0.05;
  } else {
    return sales * 0.07;
  }
}

function checkTarget(sales, target) {
  if (sales >= target) {
    return "Congratulations! You met your target!";
  } else {
    return "You have not met your sales target. Keep trying!";
  }
}

const fs = require("fs");

const data = fs.readFileSync("leads.json", "utf8");

const leads = JSON.parse(data);

let qualifiedLeads = 0
let followUpLeads = 0
let totalbudget = 0
let averageBudget = 0
let totalLeads = leads.length

leads.forEach(lead => {
  if (lead.status === "Qualified") {
    qualifiedLeads++;
  } else {
    followUpLeads++;
  }

    console.log(`Name: ${lead.name}`);
    totalbudget += lead.budget;
    averageBudget = totalbudget / totalLeads;  
}); 

 console.log(`\nTotal Potential Sales: ₱${totalbudget}`);
 console.log(`Average Buyer Budget: ₱${averageBudget}`);
