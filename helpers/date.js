export function checkIfUnderage(birthdate) {
    const currDate = new Date();
    if (birthdate == null){
        return;
    }
    var birthday = new Date(birthdate);
    var age = currDate.getFullYear() - birthday.getFullYear();
    var m = currDate.getMonth() - birthday.getMonth();
    if (m < 0 || (m === 0 && currDate.getDate() < birthday.getDate())) {
        age--;
    }
    if (age < 13) {
        return true;
    } else {
        return false;
    }
}