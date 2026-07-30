let data = [];
fetch("data.json")
.then(res => res.json())
.then(json => {
data = json;
document
.getElementById("keyword")
.addEventListener("input", search);
});
function search() {
const keyword =
document
.getElementById("keyword")
.value
.trim();
const result = data.filter(row =>
row.name1.includes(keyword)
);
const tbody =
document.getElementById("result");
tbody.innerHTML = "";
result.slice(0,100).forEach(row => {
tbody.innerHTML += `
<tr>
<td>${row.code}</td>
<td>${row.name1}</td>
<td>${row.name2 || ""}</td>
<td>${row.name3 || ""}</td>
</tr>
`;
});
}