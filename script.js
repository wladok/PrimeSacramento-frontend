// phone formatting
const phoneInput = document.getElementById("phone");

        phoneInput.addEventListener("input", (e) => {
        let value = e.target.value.replace(/\D/g, "");

        if (value.length > 10) {
            value = value.slice(0, 10);
        }

        let formatted = "";

        if (value.length > 0) {
            formatted = "(" + value.substring(0, 3);
        }

        if (value.length >= 4) {
            formatted += ")" + value.substring(3, 6);
        }

        if (value.length >= 7) {
            formatted += "-" + value.substring(6, 10);
        }

        e.target.value = formatted;
        });


// form sending //

const form = document.getElementById("telegramForm");
const status = document.getElementById("formStatus");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    status.textContent = "Sending...";
    status.style.color = "#444";

    const formData = new FormData(form);

    try {
        const response = await fetch("https://primesacramento-backend.onrender.com/send", {
            method: "POST",
            body: formData
        });

        const message = await response.text();

        if (response.ok) {
            status.textContent = "✓ Your request has been sent successfully!";
            status.style.color = "green";

            form.reset();
        } else {
            status.textContent = message;
            status.style.color = "red";
        }

    } catch (error) {
        console.error(error);

        status.textContent = "Something went wrong. Please try again.";
        status.style.color = "red";
    }
});

// SELECT //

const services = {

    "General Handyman":[
        "Furniture Assembly",
        "Picture Hanging",
        "Shelving Installation",
        "Minor Repairs",
        "Caulking"
    ],

    "Painting":[
        "Interior Painting",
        "Exterior Painting",
        "Cabinet Painting",
        "Fence Painting",
        "Deck Staining",
        "Drywall Painting"
    ],

    "Plumbing":[
        "Faucet Installation",
        "Toilet Installation",
        "Garbage Disposal",
        "Leak Repair",
        "Sink Installation",
        "Shower Head Replacement"
    ],

    "Electrical":[
        "Light Fixture Installation",
        "Ceiling Fan Installation",
        "Outlet Replacement",
        "Switch Replacement",
        "Smoke Detector",
        "TV Mounting"
    ],

    "Flooring":[
        "Laminate",
        "Vinyl",
        "Tile",
        "Baseboards",
        "Carpet Installation"
    ],

    "Doors & Windows":[
        "Door Installation",
        "Door Repair",
        "Window Installation",
        "Window Repair",
        "Weather Stripping"
    ],

    "Appliance Installation":[
        "Dishwasher",
        "Microwave",
        "Range Hood",
        "Washer",
        "Dryer"
    ],

    "Outdoor":[
        "Fence Repair",
        "Gate Repair",
        "Pressure Washing",
        "Deck Repair",
        "Mailbox Installation"
    ],

    "Other":[
        "Other"
    ]

};

const typeSelect = document.getElementById("serviceType");
const serviceSelect = document.getElementById("specificService");

typeSelect.addEventListener("change", ()=>{

    serviceSelect.innerHTML =
        '<option value="">Select Service</option>';

    services[typeSelect.value].forEach(service=>{

        const option=document.createElement("option");

        option.value=service;

        option.textContent=service;

        serviceSelect.appendChild(option);

    });

});

