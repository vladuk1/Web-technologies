function triangle(val1, type1, val2, type2) {
    if (val1 <= 0 || val2 <= 0) {
        console.log("Значення повинні бути додатніми числами.");
        return "failed";
    }

    const validTypes = ["leg", "hypotenuse", "adjacent angle", "opposite angle", "angle"];
    if (!validTypes.includes(type1) || !validTypes.includes(type2)) {
        console.log("Неправильний тип аргументу.");
        return "failed";
    }

    let hypotenuse, leg, alpha, beta;

    if (type1 === "leg" && type2 === "leg") {
        leg = val1;
        hypotenuse = val2;
    } else if (type1 === "leg" && type2 === "hypotenuse") {
        leg = val1;
        hypotenuse = val2;
    } else if (type1 === "hypotenuse" && type2 === "leg") {
        leg = val2;
        hypotenuse = val1;
    } else if ((type1 === "opposite angle" && type2 === "leg") || (type1 === "leg" && type2 === "opposite angle")) {
        // Existing code
    } else if ((type1 === "opposite angle" && type2 === "angle") || (type1 === "angle" && type2 === "opposite angle")) {
        // Existing code
    } else if ((type1 === "opposite angle" && type2 === "adjacent angle") || (type1 === "adjacent angle" && type2 === "opposite angle")) {
        // Existing code
    } else if ((type1 === "angle" && type2 === "hypotenuse") || (type1 === "hypotenuse" && type2 === "angle")) {
        if (type1 === "angle") {
            alpha = val1;
            hypotenuse = val2;
        } else {
            alpha = val2;
            hypotenuse = val1;
        }

        if (alpha >= 90) {
            console.log("Неможливо побудувати трикутник з цим кутом.");
            return "failed";
        }

        beta = 90 - alpha;
        leg = hypotenuse * Math.sin(alpha * (Math.PI / 180));

        // Calculate the missing angles and sides
        const otherLeg = Math.sqrt(hypotenuse ** 2 - leg ** 2);
        console.log(`Сторони трикутника: c = ${hypotenuse}, a = ${leg}, b = ${otherLeg}`);
        console.log(`Гострі кути трикутника: alpha = ${alpha}°, beta = ${beta}°`);
        console.log("success");
        return;
    } else {
        console.log("Неправильна комбінація типів для обчислення.");
        return "failed";
    }
}

triangle(20, "angle", 10, "hypotenuse");
