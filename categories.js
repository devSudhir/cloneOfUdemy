function showCategoriesList() {
    let parentDiv = document.getElementById("parent_div");
    parentDiv.style.display = "block"
}
let childArray = [
    ["#", "Web development", "#", "Data Science", "#", "Mobile Development",
    "#", "Programming Languages","#", "Game Development",
    "#", "Database Design & Development","#", "Software Testing",
    "#", "Software Engineering", "#", "Development Tools",
        "#", "No-Code Development"],
    ["#", "Enterpreneurship", "#", "Communication", "#", "Management", "#", "Sales", "#", "Business Strategy", "#", "Operations", "#", "Project Management", "#", "Business Law", "#", "Business Analytics & intelligence", "#", "Human Respurces", "#", "industry", "#", "E-Commerse"],
    ["#","Accounting & Bookkeeping", "#", "Complience", "#", "Cryptocurrency & Blockchain", "#", "Economics", "#", "Finance", "#", "Finance Cert & Exam Prep", "#", "Taxes", "#", "Investing & Trading", "#", "Other Finance & Accounting"],
    ["#","IT Certification", "#", "Network & Security", "#", "Hardware", "#", "Operating System", "#", "Other IT & Software"],
    ["#","Microsoft", "#", "Apple", "#", "Google", "#", "SAP", "#", "Oracle"],
    ["#","Personal transformation","#","Leadership","#","Career Development","#","Happiness","#","Creativity","#","Influence"]
  ];
function showChildList(index) {
    let childDiv = document.getElementById("child_div");
    childDiv.style.display = "block"
    childDiv.innerHTML = null;
    let ul = document.createElement("ul");
    for (let i = 0; i < childArray[index].length; i += 2){
        let li = document.createElement("li");
        li.innerHTML = `<a  onmouseover="showGrandChildList(${index},${i / 2})" href=${childArray[index][i]}>${childArray[index][i + 1]}</a>`;
        ul.appendChild(li);
    } 
    childDiv.appendChild(ul);
}

let grandChildArray = [
    [
        ["#", "JavaScript", "#", "React", "#", "css",
        "#", "Angular","#", "Django",
        "#", "PHP", "#", "Node.js", "#", "Wordpress"],
        ["#", "Python", "#", "Machine learning", "#", "Deep learning", "#", "Data Analysis", "#", "Artificial Intelligence",
            "#", "R(programming language)", "#", "TensorFlow", "#", "Statistics"]
    ],
    [
        ["#", "Busness Fundamentals", "#", "Enterprenureship Fundamentals", "#", "Business Strategy", "#", "Startup", "#", "Freelancing"],
        ["#","Product Management", "#", "leadership", "#", "Business Streagey", "#", "Management Skills", "#", "ISO 9001", "#", "Agile"],
        ["#","Sales Skills", "#", "B2B Sales", "#", "LinkedIn", "#", "Cold Email", "#", "Customer Service"],
        ["#","Digital Marketing","#", "Management Counsulting", "#", "Business Model", "#", "Google Adds", "#", "Innovations"],
        ["#","Six Sigma", "#", "Six Sigma Green Belt", "#", "Supply Chain", "#", "Lean", "#", "Quality management", "#", "Robotic Process Automation"],
        ["#","PMP", "#", "PMBOK", "#", "CAPM", "#", "PMI - ACI", "#", "Agile"],
        ["#","GDPR", "#", "Contact Law", "#", "Law", "#", "Medical Device Development", "#", "Data Protection", "#", "Patent"],
        ["#","Microsoft Power BI", "#", "SQL", "#", "Tableau", "#", "MySQL", "#", "Blockchain"],
        ["#","Recruiting","#","HR Analytics","#","Instructional Design","#","Hiring","#","Employee law"]
    ],
    [
        ["#","Accounting","#","Bookkeeping","#","Finance Accounting","#","Financial Statement","#","Tally.Erp","#","Xero","#","Cost Accounting"],
        ["#","Anti-Money Laundering","#","Risk Management","#","CAMS Certification","#","IFRS","#","Accounting"],
        ["#","CryptoCurrency","#","Bitcoin","#","Blockchain","#","Personal Finance","#","Day Trading","#","NFT"],
        ["#","Stata","#","Microeconomics","#","macroeconomics","#","Data Visualization","#","Economics"],
        ["#","Personal Finance","#","Investement Banking","#","CFA","#","Finance Fundamentals","#","Corporate Finance"],
        ["#","CFA","#","CMA","#","ACCA","#","Stock Trading","#","Financial Planing"]
    ],
    [
        ["#","AWS certification","#","Microsoft Certific","#","AWS Certified","#","Amazon Aws","#","Microsoft AZ-900"],
        ["#","Ethical Hacking","#","Cyber Security","#","Network Security","#","Personal Testing","#","Kubernets"],
        ["#","PLC","#","Arduino","#","Microcontroller","#","Electronics","#","Rasberry Pi","#","Fpga"],
        ["#","Linux","#","Linux Administration","#","Windows Server","#","Shell Scripting","#","VMware"],
        ["#","Python","#","Kubernets","#","Docker","#","DevOps","#","React","#","Java"]
    ]
];
function showGrandChildList(childIndex, grandChildIndex) {
    // console.log(grandChildArray[childIndex][grandChildIndex], childIndex, grandChildIndex);
    let grandChildDiv = document.getElementById("grandChild_div");
    grandChildDiv.style.display = "block";
    grandChildDiv.innerHTML = null;
    let ul = document.createElement("ul");
    for (let i = 0; i < grandChildArray[childIndex][grandChildIndex].length; i += 2){
        // console.log(grandChildArray[childIndex][grandChildIndex][i + 1], i);
        
        let li = document.createElement("li");
        li.innerHTML = `<a href=${grandChildArray[childIndex][grandChildIndex][i]}>${grandChildArray[childIndex][grandChildIndex][i + 1]}</a>`;
        ul.appendChild(li);
    }
    let h3 = document.createElement("h3");
    h3.textContent = "Popular topics";

    grandChildDiv.appendChild(h3);
    grandChildDiv.appendChild(ul);
}
/* function disableDisplayParent() {
    let parentDiv = document.getElementById("parent_div");
    parentDiv.style.display = "none";
} */

/* function disableDisplayChild() {
    let childDiv = document.getElementById("child_div");
    childDiv.style.display = "none";
}

function disableDisplayGrandChild() {
    let grandChildDiv = document.getElementById("grandChild_div");
    grandChildDiv.style.display = "none";
} */