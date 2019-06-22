let month = document.querySelector('.month')
const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
const now = new Date();
console.log(now)
month.innerHTML = monthNames[now.getMonth()]