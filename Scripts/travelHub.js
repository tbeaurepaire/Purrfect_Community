/* PURRFECT COMMUNITY - TRAVEL HUB JAVASCRIPT */

"use strict";
document.addEventListener("DOMContentLoaded", function () {

    // 1. TRANSPORT GUIDE - INTERACTIVE TABS
    const guides = {
        car: {
            title: "Travelling by Car Across Ireland 🚗",
            description: "Keep your cat safe, secure and comfortable during car journeys.",
            tips: [
                "Secure the carrier with a seatbelt on the back seat.",
                "Never leave your cat alone in a parked car.",
                "Plan safe stops and offer water when appropriate.",
                "Ask your vet for advice about travel sickness."
            ]
        },

        train: {
            title: "Public Transport: Irish Rail, DART & Bus 🚆",
            description: "Check the current pet policies before travelling.",
            tips: [
                "Keep your cat in a secure, fully enclosed carrier.",
                "Check Irish Rail, DART and bus operator rules.",
                "A light carrier cover may reduce noise and visual stress.",
                "Keep your contact details attached to the carrier."
            ]
        },

        flight: {
            title: "International Travel: Ferry & Flight ✈️",
            description: "Prepare in advance and check the requirements for your destination.",
            tips: [
                "Check official pet travel requirements.",
                "Ask your vet about microchips, rabies vaccination and pet passports.",
                "Confirm carrier dimensions and booking rules with your airline.",
                "Check ferry pet accommodation options before departure."
            ]
        }
    };

    const title = document.getElementById("modeTitle");
    const description = document.getElementById("modeDescription");
    const tipsList = document.getElementById("modeTipsList");

    const buttons = {
        car: document.getElementById("btnCar"),
        train: document.getElementById("btnTrain"),
        flight: document.getElementById("btnFlight")
    };

    function showGuide(mode) {
        const guide = guides[mode];

        if (!guide || !title || !description || !tipsList) return;

        title.textContent = guide.title;
        description.textContent = guide.description;

        tipsList.replaceChildren();

        guide.tips.forEach(function (tip) {
            const li = document.createElement("li");
            li.textContent = tip;
            tipsList.appendChild(li);
        });

        Object.keys(buttons).forEach(function (key) {
            if (!buttons[key]) return;

            buttons[key].classList.toggle("active", key === mode);
            buttons[key].setAttribute("aria-pressed", String(key === mode));
        });
    }

    Object.keys(buttons).forEach(function (mode) {
        if (buttons[mode]) {
            buttons[mode].addEventListener("click", function () {
                showGuide(mode);
            });
        }
    });


    // 2. PACKING CHECKLIST - PROGRESS BAR

    const packingList = document.getElementById("packingList");
    const progressBar = document.getElementById("packingProgress");
    const progressText = document.getElementById("progressText");
    const newItemInput = document.getElementById("newItemInput");
    const addItemBtn = document.getElementById("addItemBtn");
    const packingError = document.getElementById("packingError");

    function updateProgress() {
        if (!packingList || !progressBar || !progressText) return;

        const checkboxes = packingList.querySelectorAll(
            'input[type="checkbox"]'
        );

        const checked = packingList.querySelectorAll(
            'input[type="checkbox"]:checked'
        ).length;

        const total = checkboxes.length;

        const percent = total
            ? Math.round((checked / total) * 100)
            : 0;

        checkboxes.forEach(function (checkbox) {
            const label = packingList.querySelector(
                'label[for="' + checkbox.id + '"]'
            );

            if (label) {
                label.classList.toggle("is-packed", checkbox.checked);
            }
        });

        progressBar.style.width = percent + "%";
        progressBar.textContent = percent + "%";
        progressBar.setAttribute("aria-valuenow", String(percent));

        progressText.textContent =
            checked + " of " + total + " items packed";
    }

    if (packingList) {
        packingList.addEventListener("change", updateProgress);
        updateProgress();
    }

    // ADD A CUSTOM ITEM

    if (addItemBtn && newItemInput && packingList) {

        function addPackingItem() {
            const value = newItemInput.value.trim();

            if (!value) {
                if (packingError) {
                    packingError.textContent =
                        "Please type an item before adding it.";
                }
                newItemInput.focus();
                return;
            }

            if (packingError) packingError.textContent = "";

            const id = "customPack" +
                (packingList.querySelectorAll('input[type="checkbox"]').length + 1);

            const li = document.createElement("li");
            li.className = "checklist-item";

            const wrapper = document.createElement("div");
            wrapper.className = "form-check";

            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.className = "form-check-input";
            checkbox.id = id;

            const label = document.createElement("label");
            label.className = "form-check-label";
            label.htmlFor = id;
            label.textContent = value;

            wrapper.append(checkbox, label);
            li.appendChild(wrapper);
            packingList.appendChild(li);

            newItemInput.value = "";

            updateProgress();
            newItemInput.focus();
        }

        addItemBtn.addEventListener("click", addPackingItem);

        newItemInput.addEventListener("keydown", function (event) {
            if (event.key === "Enter") {
                event.preventDefault();
                addPackingItem();
            }
        });
    }


    // 3. CONTACT FORM - VALIDATION

    const contactForm = document.getElementById("contactForm");

    if (contactForm) {

        const successMessage = document.getElementById("successMessage");
        const successText = document.getElementById("successText");

        const fields = [
            "fullName",
            "email",
            "county",
            "category",
            "message",
            "privacy"
        ].map(function (id) {
            return document.getElementById(id);
        }).filter(Boolean);

        function validateField(field) {
            let valid;

            if (field.id === "fullName") {
                valid = field.value.trim().length >= 2;
            } else if (field.id === "message") {
                valid = field.value.trim().length >= 10;
            } else if (field.id === "privacy") {
                valid = field.checked;
            } else if (field.id === "email") {
                valid = field.value.trim() !== "" && field.checkValidity();
            } else {
                valid = field.value.trim() !== "";
            }

            field.classList.toggle("is-invalid", !valid);

            return valid;
        }

        fields.forEach(function (field) {
            field.addEventListener("input", function () {
                validateField(field);
            });

            field.addEventListener("change", function () {
                validateField(field);
            });
        });

        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const valid = fields.map(validateField).every(Boolean);

            if (!valid) {
                if (successMessage) {
                    successMessage.classList.add("d-none");
                }

                const firstInvalid =
                    contactForm.querySelector(".is-invalid");

                if (firstInvalid) firstInvalid.focus();

                return;
            }

            const name = document.getElementById("fullName").value.trim();
            const category = document.getElementById("category").value;
            const county = document.getElementById("county").value;



            fields.forEach(function (field) {
                field.classList.remove("is-invalid");
            });

            if (successText) {
                successText.textContent =
                    "Thank you, " + name +
                    "! We have received your message about " +
                    category + " in " + county +
                    ". Thank you for being part of our community! 🐾";
            }

            if (successMessage) {
                successMessage.classList.remove("d-none");

                successMessage.scrollIntoView({
                    behavior: "smooth",
                    block: "nearest"
                });
            }
        });

        contactForm.addEventListener("reset", function () {
            window.setTimeout(function () {
                fields.forEach(function (field) {
                    field.classList.remove("is-invalid");
                });

                if (successMessage) {
                    successMessage.classList.add("d-none");
                }
            }, 0);
        });
    }
});
