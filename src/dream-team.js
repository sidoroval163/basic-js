module.exports = function createDreamTeam(members) {
  let res = [];
  if (Array.isArray(members)) {
    for (let i = 0; i < members.length; i++) {
      if (typeof members[i] === "string") {
        members[i] = members[i].replace(/\s+/g, " ").trim();
        res.push(members[i].toUpperCase().substring(0, 1));
      } else {
        continue;
      }
    }
  } else {
    return false;
  }
  return res.sort().join("");
};
