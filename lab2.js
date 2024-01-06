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
        if (type1 === "opposite angle") {
            alpha = val1;
            leg = val2;
        } else {
            alpha = val2;
            leg = val1;
        }
        beta = 90 - alpha;
        hypotenuse = leg / Math.sin(alpha * (Math.PI / 180));
    } else if ((type1 === "opposite angle" && type2 === "angle") || (type1 === "angle" && type2 === "opposite angle")) {
        if (type1 === "opposite angle") {
            alpha = val1;
            beta = val2;
        } else {
            alpha = val2;
            beta = val1;
        }
        if (alpha + beta >= 90) {
            console.log("Неможливо побудувати трикутник з цими кутами.");
            return "failed";
        }
        const totalAngle = 180 - alpha - beta;
        hypotenuse = val1 / Math.sin(beta * (Math.PI / 180));
        leg = hypotenuse * Math.sin(alpha * (Math.PI / 180));
    } else if ((type1 === "opposite angle" && type2 === "adjacent angle") || (type1 === "adjacent angle" && type2 === "opposite angle")) {
        if (type1 === "opposite angle") {
            alpha = val1;
            beta = val2;
        } else {
            alpha = val2;
            beta = val1;
        }
        leg = val2 / Math.tan(alpha * (Math.PI / 180));
        hypotenuse = val1 / Math.sin(alpha * (Math.PI / 180));
    } else {
        console.log("Неправильна комбінація типів для обчислення.");
        return "failed";
    }

    const legSquare = leg ** 2;
    const hypotenuseSquare = hypotenuse ** 2;
    const otherLeg = Math.sqrt(hypotenuseSquare - legSquare);

    console.log(`Сторони трикутника: c = ${hypotenuse}, a = ${leg}, b = ${otherLeg}`);
    console.log(`Гострі кути трикутника: alpha = ${alpha.toFixed(2)}°, beta = ${beta.toFixed(2)}°`);
    console.log("success")
}
