document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

   
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const description = document.getElementById("description").value;

    
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const phoneError = document.getElementById("phoneError");
    const descriptionError = document.getElementById("descriptionError");

    let valid = true;

    
    if (!name) {
        nameError.classList.remove("hidden");
        valid = false;
    } else {
        nameError.classList.add("hidden");
    }

    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
        emailError.classList.remove("hidden");
        valid = false;
    } else {
        emailError.classList.add("hidden");
    }

    if (!phone || !/^08\d{8,11}$/.test(phone)) {
        phoneError.classList.remove("hidden");
        valid = false;
    } else {
        phoneError.classList.add("hidden");
    }

    if (!description) {
        descriptionError.classList.remove("hidden");
        valid = false;
    } else {
        descriptionError.classList.add("hidden");
    }

    
    if (valid) {
        const message = `Nama: ${name}\nEmail: ${email}\nNomor HP: ${phone}\nPesan: ${description}`;
      
        const whatsappLink = `https://wa.me/6285814066613?text=${encodeURIComponent(message)}`;
        window.open(whatsappLink, "_blank");
    }
});
