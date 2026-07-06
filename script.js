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
const photoInput = document.querySelector('input[name="photos"]');

photoInput.addEventListener("change", () => {
    if (photoInput.files.length > 5) {
        alert("You can upload a maximum of 5 photos.");

        photoInput.value = "";
    }
});

form.addEventListener("submit", async (e) => {
    e.preventDefault();

        function showLoading() {

            status.className = "status loading";

            status.innerHTML = `
                <span>Sending</span> <span class="status-icon">🔧</span>
            `;

        }

        function hideLoading(icon, text, color) {

            status.className = "status";

            status.style.color = color;

            status.innerHTML = `
                <span class="status-icon">${icon}</span>
                <span>${text}</span>
            `;

        }

    status.style.color = "#444";
    showLoading();

    const formData = new FormData(form);

    try {
        const response = await fetch("https://primesacramento-backend.onrender.com/send", {
            method: "POST",
            body: formData
        });

        const message = await response.text();

        if (response.ok) {
            hideLoading(
                "✓",
                "Your request has been sent successfully!",
                "green"
            );

            form.reset();
        } else {
            hideLoading(
                "❌",
                message,
                "red"
            );
        }

    } catch (error) {
        console.error(error);
        hideLoading(
            "❌",
            "Something went wrong. Please try again.",
            "red"
        );
    }
});

// SELECT //

const services = {

    "General Repairs":[
        "Minor Repairs",
        "Hanging shelves, TVs etc",
        "Furniture Assembly",
        "Lock installation and repair",
        "Painting & Drywall",
        "Interior Doors"
    ],

    "Plumbing":[
        "Faucet Services",
        "Toilet Services",
        "Garbage Disposal",
        "Sink & Drain",
        "Shower & Bathroom",
        "Leak Repair"
    ],

    "Electrical":[
        "Outlet & Switch Services",
        "Lighting Installation",
        "Ceiling Fan Services",
        "Home Safety Devices",
        "Minor Electrical Repairs"
    ],

    "Flooring":[
        "Vinyl",
        "Laminate",
        "Hardwood",
        "Flooring/Trim Repairs",
        "Baseboards & Trim",
        "Carpet Installation"
    ],

    "Doors & Windows":[
        "Exterior Doors Installation",
        "Door Repair",
        "Window Installation",
        "Window Repair",
        "Blinds & Window Treatments"
    ],

    "Outdoor":[
        "Fence Services",
        "Deck & Patio",
        "General Exterior Maintenance",
        "Assembly Services"
    ],

    "Appliance Installation":[
        "Major Kitchen Appliance Installation",
        "Washer & Dryer Installation",
        "Laundry Repairs & Adjustments",
        "Washer",
        "Dryer"
    ],

    "Other":[
        "HVAC & Climate Appliances",
        "Kitchen & Home Devices",
        "Built-in Appliance Services",
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
