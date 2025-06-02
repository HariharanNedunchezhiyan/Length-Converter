function InchConvert(){
    let cm = Number(document.getElementById('input').value);
    let inch = cm / 2.54;
    let result = document.getElementById('output');
    result.innerHTML = inch.toFixed(2) + " inches";

    // Rotate the calculator icon
    let icon = document.querySelector('.img i');
    icon.classList.add('rotate');

    // Remove the class after animation completes
    setTimeout(() => {
        icon.classList.remove('rotate');
    }, 600); // 600ms = same as CSS animation duration
}
