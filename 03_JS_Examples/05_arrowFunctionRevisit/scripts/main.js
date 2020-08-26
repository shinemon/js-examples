let group = {
title: "Group Name",
students: ["Sam","Smith","John"],

showList() {
this.students.forEach(student => alert(this.title + "::" + student)
);

}
};

group.showList();