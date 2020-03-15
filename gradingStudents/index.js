function gradingStudents(grades) {
    function finalGrade(grade){
        var remain = grade % 5 ;
        if(remain >= 3){
            grade += 5 - remain;
        }
        return grade;
    }
    for(var i=0; i< grades.length; i++){
        if(grades[i]>= 38){
            grades[i] = finalGrade(grades[i])
        }
    }
    return grades;
}
gradingStudents([73, 67, 38, 33])