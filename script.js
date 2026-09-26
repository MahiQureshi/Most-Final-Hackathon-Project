/* =========================================================
   BLOODLUMA APPLICATION
========================================================= */


/* =========================================================
   STATE
========================================================= */

const state = {

    user: null,

    currentSection: "overview",

    darkMode:
        localStorage.getItem("bloodlumaDarkMode") === "true",

    filters: {
        search: "",
        blood: "all",
        language: "all",
        hla: "",
        consent: "all"
    },

    checkedIn: 84,

    radius: 25,

    donors: [

        {
            id: "BL-1001",
            name: "Aarav Sharma",
            phone: "+91 98765 12340",
            blood: "O+",
            hla: "HLA-A*02:01",
            language: "Hindi",
            emergencyConsent: true,
            status: "Confirmed"
        },

        {
            id: "BL-1002",
            name: "Mansi Patil",
            phone: "+91 98220 11442",
            blood: "B+",
            hla: "HLA-B*07:02",
            language: "Marathi",
            emergencyConsent: true,
            status: "Attended"
        },

        {
            id: "BL-1003",
            name: "Rohan Mehta",
            phone: "+91 99887 21441",
            blood: "A+",
            hla: "HLA-C*07:02",
            language: "English",
            emergencyConsent: false,
            status: "Pending"
        },

        {
            id: "BL-1004",
            name: "Sara Khan",
            phone: "+91 97654 22113",
            blood: "O-",
            hla: "HLA-A*02:01",
            language: "Hindi",
            emergencyConsent: true,
            status: "Confirmed"
        },

        {
            id: "BL-1005",
            name: "Ishaan Verma",
            phone: "+91 98900 78412",
            blood: "AB+",
            hla: "HLA-B*07:02",
            language: "English",
            emergencyConsent: false,
            status: "Pending"
        },

        {
            id: "BL-1006",
            name: "Zoya Shaikh",
            phone: "+91 97670 33219",
            blood: "B-",
            hla: "HLA-C*07:02",
            language: "Marathi",
            emergencyConsent: true,
            status: "Confirmed"
        },

        {
            id: "BL-1007",
            name: "Aditya Kulkarni",
            phone: "+91 98231 44551",
            blood: "A-",
            hla: "HLA-A*02:01",
            language: "Marathi",
            emergencyConsent: true,
            status: "Attended"
        },

        {
            id: "BL-1008",
            name: "Neha Joshi",
            phone: "+91 98701 55661",
            blood: "O+",
            hla: "HLA-B*07:02",
            language: "Hindi",
            emergencyConsent: true,
            status: "Confirmed"
        },

        {
            id: "BL-1009",
            name: "Kabir Singh",
            phone: "+91 99999 88221",
            blood: "B+",
            hla: "HLA-C*07:02",
            language: "English",
            emergencyConsent: false,
            status: "Pending"
        },

        {
            id: "BL-1010",
            name: "Anaya Deshmukh",
            phone: "+91 97022 65117",
            blood: "AB-",
            hla: "HLA-A*02:01",
            language: "Marathi",
            emergencyConsent: true,
            status: "Confirmed"
        },

        {
            id: "BL-1011",
            name: "Farhan Ali",
            phone: "+91 98222 99012",
            blood: "O-",
            hla: "HLA-B*07:02",
            language: "Hindi",
            emergencyConsent: true,
            status: "Attended"
        },

        {
            id: "BL-1012",
            name: "Diya Rao",
            phone: "+91 99111 67332",
            blood: "A+",
            hla: "HLA-C*07:02",
            language: "English",
            emergencyConsent: false,
            status: "Pending"
        }

    ],


    drives: [

        {
            id: "DR-001",
            title: "Nagpur Community Life Drive",
            organiser: "Community Health Network",
            city: "Nagpur",
            venue: "Central Community Hall",
            date: "28 Sep 2026",
            time: "10:00 AM",
            target: 150,
            registered: 132,
            emergency: false,
            status: "active"
        },

        {
            id: "DR-002",
            title: "Mumbai Corporate Blood Drive",
            organiser: "TechCorp CSR",
            city: "Mumbai",
            venue: "TechCorp Campus",
            date: "30 Sep 2026",
            time: "09:30 AM",
            target: 200,
            registered: 174,
            emergency: false,
            status: "upcoming"
        },

        {
            id: "DR-003",
            title: "Pune Emergency Mobilisation",
            organiser: "City Donor Network",
            city: "Pune",
            venue: "Civic Convention Centre",
            date: "29 Sep 2026",
            time: "08:00 AM",
            target: 120,
            registered: 98,
            emergency: true,
            status: "active"
        },

        {
            id: "DR-004",
            title: "Delhi Community Drive",
            organiser: "Rotary Community Network",
            city: "Delhi",
            venue: "Civic Hall",
            date: "04 Oct 2026",
            time: "11:00 AM",
            target: 180,
            registered: 87,
            emergency: false,
            status: "upcoming"
        },

        {
            id: "DR-005",
            title: "Nagpur Campus Life Saver Drive",
            organiser: "University Volunteer Network",
            city: "Nagpur",
            venue: "University Auditorium",
            date: "21 Sep 2026",
            time: "10:00 AM",
            target: 100,
            registered: 96,
            emergency: false,
            status: "completed"
        },

        {
            id: "DR-006",
            title: "Pune Community Mobilisation",
            organiser: "City Donor Network",
            city: "Pune",
            venue: "West Civic Centre",
            date: "07 Oct 2026",
            time: "09:00 AM",
            target: 140,
            registered: 74,
            emergency: false,
            status: "upcoming"
        }

    ],


    emergencies: [

        {
            id: "ER-01",
            blood: "O+",
            units: 2,
            hospital: "CityCare Hospital · Nagpur",
            urgency: "Critical",
            responses: 17,
            neededResponses: 30
        },

        {
            id: "ER-02",
            blood: "B-",
            units: 1,
            hospital: "Lifeline Medical Centre · Pune",
            urgency: "High",
            responses: 9,
            neededResponses: 18
        },

        {
            id: "ER-03",
            blood: "A+",
            units: 3,
            hospital: "MetroCare Hospital · Mumbai",
            urgency: "High",
            responses: 12,
            neededResponses: 25
        },

        {
            id: "ER-04",
            blood: "O-",
            units: 2,
            hospital: "National Care Centre · Delhi",
            urgency: "Moderate",
            responses: 5,
            neededResponses: 12
        }

    ],


    audit: [

        {
            time: "16:28",
            type: "QR",
            description: "Donor pass verified successfully",
            detail: "Ticket BL-TK-2091",
            user: "Volunteer"
        },

        {
            time: "16:21",
            type: "SOS",
            description: "Emergency broadcast sent",
            detail: "O+ · 2 units · 25 km",
            user: "Coordinator"
        },

        {
            time: "16:14",
            type: "CONSENT",
            description: "Emergency communication consent updated",
            detail: "Donor BL-1006",
            user: "Donor"
        },

        {
            time: "15:58",
            type: "DRIVE",
            description: "New drive created",
            detail: "Nagpur Community Life Drive",
            user: "Organiser"
        },

        {
            time: "15:44",
            type: "QR",
            description: "Duplicate check-in prevented",
            detail: "Ticket BL-TK-2034",
            user: "Scanner"
        }

    ]

};


/* =========================================================
   INITIALISATION
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    initializeTheme();

    initializeAuthentication();

    initializeNavigation();

    initializeGlobalSearch();

    initializeSmartSearch();

    initializeModals();

    initializeEmergency();

    initializeScenario();

    initializeAttendance();

    initializeNotifications();

    initializeAudit();

    initializeDrives();

    initializeActions();

    renderAll();

    animateCounters();

});


/* =========================================================
   THEME
========================================================= */

function initializeTheme() {

    if (state.darkMode) {

        document.body.classList.add("dark-mode");

        updateThemeButton();

    }

    document
        .getElementById("themeToggle")
        .addEventListener("click", toggleTheme);

}


function toggleTheme() {

    state.darkMode =
        !state.darkMode;

    document.body.classList.toggle(
        "dark-mode",
        state.darkMode
    );

    localStorage.setItem(
        "bloodlumaDarkMode",
        state.darkMode
    );

    updateThemeButton();

    showToast(
        state.darkMode
            ? "Dark Mode enabled"
            : "Light Mode enabled",
        "info"
    );

}


function updateThemeButton() {

    const icon =
        document.getElementById("themeIcon");

    const text =
        document.querySelector(".theme-text");

    if (state.darkMode) {

        icon.textContent = "☀";

        if (text) {
            text.textContent = "Light Mode";
        }

    } else {

        icon.textContent = "☾";

        if (text) {
            text.textContent = "Dark Mode";
        }

    }

}


/* =========================================================
   AUTHENTICATION
========================================================= */

function initializeAuthentication() {

    const savedUser =
        localStorage.getItem("bloodlumaUser");

    if (savedUser) {

        try {

            state.user =
                JSON.parse(savedUser);

            enterApplication(false);

        } catch {

            localStorage.removeItem("bloodlumaUser");

        }

    }


    document
        .getElementById("showSignupBtn")
        .addEventListener("click", showSignup);


    document
        .getElementById("showLoginBtn")
        .addEventListener("click", showLogin);


    document
        .getElementById("loginForm")
        .addEventListener("submit", handleLogin);


    document
        .getElementById("signupForm")
        .addEventListener("submit", handleSignup);


    document
        .getElementById("demoLoginBtn")
        .addEventListener("click", demoLogin);


    document
        .getElementById("forgotPasswordBtn")
        .addEventListener("click", () => {

            showToast(
                "Password reset instructions simulated for the prototype.",
                "info"
            );

        });


    document
        .querySelectorAll(".password-toggle")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const input =
                        document.getElementById(
                            button.dataset.target
                        );

                    if (
                        input.type ===
                        "password"
                    ) {

                        input.type = "text";

                        button.textContent =
                            "Hide";

                    } else {

                        input.type = "password";

                        button.textContent =
                            "Show";

                    }

                }
            );

        });

}


function showSignup() {

    document
        .getElementById("loginForm")
        .classList.add("hidden");

    document
        .getElementById("signupForm")
        .classList.remove("hidden");

    document
        .getElementById("authTitle")
        .textContent =
        "Create your account";

    document
        .getElementById("authSubtitle")
        .textContent =
        "Join the BloodLuma mobilisation network.";

}


function showLogin() {

    document
        .getElementById("signupForm")
        .classList.add("hidden");

    document
        .getElementById("loginForm")
        .classList.remove("hidden");

    document
        .getElementById("authTitle")
        .textContent =
        "Welcome back";

    document
        .getElementById("authSubtitle")
        .textContent =
        "Sign in to access your BloodLuma workspace.";

}


function handleLogin(event) {

    event.preventDefault();

    const email =
        document
            .getElementById("loginEmail")
            .value
            .trim();

    const password =
        document
            .getElementById("loginPassword")
            .value;

    if (!email || !password) {

        showToast(
            "Please enter your email and password.",
            "error"
        );

        return;

    }

    const stored =
        JSON.parse(
            localStorage.getItem(
                "bloodlumaAccount"
            ) || "null"
        );

    if (
        stored &&
        stored.email === email &&
        stored.password === password
    ) {

        state.user = stored;

    } else {

        state.user = {

            name:
                email
                    .split("@")[0]
                    .replace(/[._]/g, " ")
                    .replace(/\b\w/g, c =>
                        c.toUpperCase()
                    ),

            email,

            phone: "",

            role: "Organiser"

        };

    }

    localStorage.setItem(
        "bloodlumaUser",
        JSON.stringify(state.user)
    );

    enterApplication(true);

}


function handleSignup(event) {

    event.preventDefault();

    const account = {

        name:
            document
                .getElementById("signupName")
                .value
                .trim(),

        email:
            document
                .getElementById("signupEmail")
                .value
                .trim(),

        phone:
            document
                .getElementById("signupPhone")
                .value
                .trim(),

        password:
            document
                .getElementById("signupPassword")
                .value,

        role:
            document
                .getElementById("signupRole")
                .value

    };

    localStorage.setItem(
        "bloodlumaAccount",
        JSON.stringify(account)
    );

    state.user = account;

    localStorage.setItem(
        "bloodlumaUser",
        JSON.stringify(state.user)
    );

    showToast(
        "Account created successfully.",
        "success"
    );

    enterApplication(true);

}


function demoLogin() {

    state.user = {

        name: "Demo Organiser",

        email: "demo@bloodluma.app",

        phone: "+91 90000 00000",

        role: "Organiser"

    };

    localStorage.setItem(
        "bloodlumaUser",
        JSON.stringify(state.user)
    );

    enterApplication(true);

}


function enterApplication(showMessage = true) {

    document
        .getElementById("authScreen")
        .classList.add("hidden");

    document
        .getElementById("app")
        .classList.remove("hidden");

    updateUserUI();

    if (showMessage) {

        showToast(
            `Welcome to BloodLuma, ${state.user.name.split(" ")[0]}.`,
            "success"
        );

    }

}


function updateUserUI() {

    if (!state.user) return;

    const firstLetter =
        state.user.name
            .charAt(0)
            .toUpperCase();

    document
        .getElementById("welcomeName")
        .textContent =
        state.user.name
            .split(" ")[0];

    document
        .getElementById("sidebarUserName")
        .textContent =
        state.user.name;

    document
        .getElementById("sidebarUserRole")
        .textContent =
        state.user.role;

    document
        .getElementById("topUserName")
        .textContent =
        state.user.name;

    document
        .getElementById("topUserRole")
        .textContent =
        state.user.role;

    document
        .getElementById("sidebarAvatar")
        .textContent =
        firstLetter;

    document
        .getElementById("topAvatar")
        .textContent =
        firstLetter;

}


/* =========================================================
   NAVIGATION
========================================================= */

function initializeNavigation() {

    document
        .querySelectorAll(".nav-item[data-section]")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    navigateTo(
                        button.dataset.section
                    );

                    closeSidebar();

                }
            );

        });


    document
        .querySelectorAll("[data-section-link]")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    navigateTo(
                        button.dataset.sectionLink
                    );

                }
            );

        });


    document
        .getElementById("openSidebarBtn")
        .addEventListener(
            "click",
            openSidebar
        );


    document
        .getElementById("closeSidebarBtn")
        .addEventListener(
            "click",
            closeSidebar
        );


    document
        .getElementById("sidebarOverlay")
        .addEventListener(
            "click",
            closeSidebar
        );

}


function navigateTo(section) {

    state.currentSection = section;

    document
        .querySelectorAll(".page-section")
        .forEach(page => {

            page.classList.remove("active");

        });


    const target =
        document.getElementById(
            `section-${section}`
        );

    if (!target) return;

    target.classList.add("active");


    document
        .querySelectorAll(".nav-item[data-section]")
        .forEach(button => {

            button.classList.toggle(
                "active",
                button.dataset.section === section
            );

        });


    const names = {

        overview: "Overview",

        "smart-search": "Smart Search",

        drives: "Blood Drives",

        emergency: "Emergency",

        intelligence: "Turnout Intelligence",

        communications: "Communications",

        attendance: "Attendance",

        consent: "Consent Ledger",

        audit: "Audit Log"

    };

    document
        .getElementById("currentPageName")
        .textContent =
        names[section] || "Overview";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


function openSidebar() {

    document
        .getElementById("sidebar")
        .classList.add("open");

    document
        .getElementById("sidebarOverlay")
        .classList.add("open");

}


function closeSidebar() {

    document
        .getElementById("sidebar")
        .classList.remove("open");

    document
        .getElementById("sidebarOverlay")
        .classList.remove("open");

}


/* =========================================================
   SMART SEARCH
========================================================= */

function initializeSmartSearch() {

    const search =
        document.getElementById(
            "smartSearchInput"
        );

    search.addEventListener(
        "input",
        event => {

            state.filters.search =
                event.target.value
                    .toLowerCase()
                    .trim();

            renderDonors();

        }
    );


    document
        .getElementById("clearSmartSearch")
        .addEventListener(
            "click",
            () => {

                search.value = "";

                state.filters.search = "";

                renderDonors();

            }
        );


    /* HLA */

    document
        .getElementById("hlaFilterButton")
        .addEventListener(
            "click",
            () => {

                document
                    .getElementById("hlaInputPanel")
                    .classList.toggle("open");

                setTimeout(() => {

                    document
                        .getElementById("hlaInput")
                        .focus();

                }, 250);

            }
        );


    document
        .getElementById("closeHlaPanel")
        .addEventListener(
            "click",
            closeHlaPanel
        );


    document
        .getElementById("applyHlaButton")
        .addEventListener(
            "click",
            applyHlaFilter
        );


    document
        .getElementById("clearHlaButton")
        .addEventListener(
            "click",
            () => {

                document
                    .getElementById("hlaInput")
                    .value = "";

                state.filters.hla = "";

                document
                    .getElementById("hlaFilterLabel")
                    .textContent =
                    "Enter HLA type";

                renderDonors();

            }
        );


    document
        .querySelectorAll(
            ".hla-suggestions button"
        )
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    document
                        .getElementById("hlaInput")
                        .value =
                        button.dataset.hla;

                    applyHlaFilter();

                }
            );

        });


    document
        .querySelectorAll(
            ".smart-filter:not(#hlaFilterButton)"
        )
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const type =
                        button.dataset.filter;

                    if (type === "blood") {

                        const value =
                            prompt(
                                "Enter blood group (example: O+, A+, B-, O-):",
                                ""
                            );

                        if (value) {

                            state.filters.blood =
                                value.trim().toUpperCase();

                            document
                                .getElementById(
                                    "bloodFilterLabel"
                                )
                                .textContent =
                                state.filters.blood;

                            renderDonors();

                        }

                    }

                    if (type === "language") {

                        const value =
                            prompt(
                                "Enter language:",
                                "Hindi"
                            );

                        if (value) {

                            state.filters.language =
                                value.trim();

                            document
                                .getElementById(
                                    "languageFilterLabel"
                                )
                                .textContent =
                                state.filters.language;

                            renderDonors();

                        }

                    }

                    if (type === "consent") {

                        const value =
                            prompt(
                                "Enter consent: yes or no",
                                "yes"
                            );

                        if (value) {

                            state.filters.consent =
                                value.toLowerCase() ===
                                "yes"
                                    ? "yes"
                                    : "no";

                            document
                                .getElementById(
                                    "consentFilterLabel"
                                )
                                .textContent =
                                state.filters.consent ===
                                "yes"
                                    ? "Enabled"
                                    : "Disabled";

                            renderDonors();

                        }

                    }

                }
            );

        });

}


function applyHlaFilter() {

    const input =
        document
            .getElementById("hlaInput")
            .value
            .trim();

    if (!input) {

        showToast(
            "Enter an HLA value first.",
            "error"
        );

        return;

    }

    state.filters.hla =
        input.toUpperCase();

    document
        .getElementById("hlaFilterLabel")
        .textContent =
        state.filters.hla;

    closeHlaPanel();

    renderDonors();

    showToast(
        `HLA filter applied: ${state.filters.hla}`,
        "success"
    );

}


function closeHlaPanel() {

    document
        .getElementById("hlaInputPanel")
        .classList.remove("open");

}


function renderDonors() {

    let donors =
        [...state.donors];


    const search =
        state.filters.search;


    if (search) {

        donors =
            donors.filter(donor => {

                return [

                    donor.name,

                    donor.phone,

                    donor.id,

                    donor.blood,

                    donor.hla,

                    donor.language

                ]
                    .join(" ")
                    .toLowerCase()
                    .includes(search);

            });

    }


    if (
        state.filters.blood !==
        "all"
    ) {

        donors =
            donors.filter(
                donor =>
                    donor.blood ===
                    state.filters.blood
            );

    }


    if (
        state.filters.language !==
        "all"
    ) {

        donors =
            donors.filter(
                donor =>
                    donor.language
                        .toLowerCase() ===
                    state.filters.language
                        .toLowerCase()
            );

    }


    if (state.filters.hla) {

        donors =
            donors.filter(
                donor =>
                    donor.hla
                        .toUpperCase()
                        .includes(
                            state.filters.hla
                        )
            );

    }


    if (
        state.filters.consent !==
        "all"
    ) {

        const required =
            state.filters.consent ===
            "yes";

        donors =
            donors.filter(
                donor =>
                    donor.emergencyConsent ===
                    required
            );

    }


    const tbody =
        document.getElementById(
            "donorTableBody"
        );

    tbody.innerHTML = "";


    donors.forEach(donor => {

        const row =
            document.createElement("tr");

        row.innerHTML = `

            <td>

                <div class="donor-cell">

                    <div class="donor-avatar">
                        ${donor.name.charAt(0)}
                    </div>

                    <div>

                        <strong>
                            ${donor.name}
                        </strong>

                        <small>
                            ${donor.id}
                        </small>

                    </div>

                </div>

            </td>

            <td>
                <strong>${donor.blood}</strong>
            </td>

            <td>
                <span class="status-pill active">
                    ${donor.hla}
                </span>
            </td>

            <td>
                ${donor.language}
            </td>

            <td>

                <span class="status-pill ${
                    donor.emergencyConsent
                        ? "success"
                        : "danger"
                }">

                    ${
                        donor.emergencyConsent
                            ? "Enabled"
                            : "Disabled"
                    }

                </span>

            </td>

            <td>

                <span class="status-pill ${
                    donor.status === "Attended"
                        ? "success"
                        : donor.status === "Confirmed"
                            ? "active"
                            : "warning"
                }">

                    ${donor.status}

                </span>

            </td>

            <td>

                <button
                    class="table-action"
                    onclick="viewDonor('${donor.id}')"
                >
                    View
                </button>

            </td>

        `;

        tbody.appendChild(row);

    });


    document
        .getElementById(
            "searchResultCount"
        )
        .textContent =
        `${donors.length} record${
            donors.length === 1 ? "" : "s"
        }`;

    renderActiveFilters();

}


function renderActiveFilters() {

    const container =
        document.getElementById(
            "activeFilters"
        );

    const filters = [];

    if (state.filters.search) {

        filters.push(
            `Search: ${state.filters.search}`
        );

    }

    if (
        state.filters.blood !==
        "all"
    ) {

        filters.push(
            `Blood: ${state.filters.blood}`
        );

    }

    if (
        state.filters.language !==
        "all"
    ) {

        filters.push(
            `Language: ${state.filters.language}`
        );

    }

    if (state.filters.hla) {

        filters.push(
            `HLA: ${state.filters.hla}`
        );

    }

    if (
        state.filters.consent !==
        "all"
    ) {

        filters.push(
            `Emergency consent: ${
                state.filters.consent
            }`
        );

    }


    container.innerHTML = `

        <span class="active-filter-label">
            Active filters:
        </span>

        ${
            filters.length
                ? filters
                    .map(
                        filter =>
                            `<span class="filter-chip">${filter}</span>`
                    )
                    .join("")
                : `<span class="filter-chip">
                        All records
                   </span>`
        }

    `;

}


function viewDonor(id) {

    const donor =
        state.donors.find(
            d => d.id === id
        );

    if (!donor) return;

    showToast(
        `${donor.name} · ${donor.blood} · ${donor.hla}`,
        "info"
    );

}


/* =========================================================
   MODALS
========================================================= */

function initializeModals() {

    document
        .querySelectorAll(".modal-close")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const modal =
                        button.closest(
                            ".modal-overlay"
                        );

                    if (modal) {

                        modal.classList.remove(
                            "open"
                        );

                    }

                }
            );

        });


    document
        .querySelectorAll(".modal-overlay")
        .forEach(overlay => {

            overlay.addEventListener(
                "click",
                event => {

                    if (
                        event.target ===
                        overlay
                    ) {

                        overlay.classList.remove(
                            "open"
                        );

                    }

                }
            );

        });


    document
        .getElementById("createDriveButton")
        .addEventListener(
            "click",
            openDriveModal
        );


    document
        .getElementById("createDriveButtonTwo")
        .addEventListener(
            "click",
            openDriveModal
        );


    document
        .getElementById("driveForm")
        .addEventListener(
            "submit",
            createDrive
        );


    document
        .getElementById("newEmergencyButton")
        .addEventListener(
            "click",
            () => {

                document
                    .getElementById("emergencyModal")
                    .classList.add("open");

            }
        );


    document
        .getElementById("emergencyForm")
        .addEventListener(
            "submit",
            createEmergency
        );

}


function openDriveModal() {

    document
        .getElementById("driveModal")
        .classList.add("open");

}


function createDrive(event) {

    event.preventDefault();

    const drive = {

        id:
            `DR-${Date.now()}`,

        title:
            document
                .getElementById("driveTitle")
                .value,

        organiser:
            state.user
                ? state.user.name
                : "BloodLuma Organiser",

        city:
            document
                .getElementById("driveCity")
                .value,

        venue:
            document
                .getElementById("driveVenue")
                .value,

        date:
            document
                .getElementById("driveDate")
                .value,

        time:
            document
                .getElementById("driveTime")
                .value,

        target:
            Number(
                document
                    .getElementById("driveTarget")
                    .value
            ),

        registered: 0,

        emergency: false,

        status: "upcoming"

    };

    state.drives.unshift(drive);

    document
        .getElementById("driveModal")
        .classList.remove("open");

    event.target.reset();

    renderDrives();

    addAudit(
        "DRIVE",
        "New blood drive created",
        drive.title
    );

    showToast(
        "Blood drive created successfully.",
        "success"
    );

}


function createEmergency(event) {

    event.preventDefault();

    const emergency = {

        id:
            `ER-${Date.now()}`,

        blood:
            document
                .getElementById("emergencyBlood")
                .value,

        units:
            Number(
                document
                    .getElementById("emergencyUnits")
                    .value
            ),

        hospital:
            document
                .getElementById("emergencyHospital")
                .value,

        urgency:
            document
                .getElementById("emergencyUrgency")
                .value,

        responses: 0,

        neededResponses: 20

    };

    state.emergencies.unshift(
        emergency
    );

    document
        .getElementById("emergencyModal")
        .classList.remove("open");

    event.target.reset();

    renderEmergencies();

    addAudit(
        "SOS",
        "Emergency broadcast created",
        `${emergency.blood} · ${emergency.units} units`
    );

    showToast(
        `Emergency mobilisation broadcast created for ${emergency.blood}.`,
        "success"
    );

}


/* =========================================================
   EMERGENCY
========================================================= */

function initializeEmergency() {

    const slider =
        document.getElementById(
            "radiusSlider"
        );

    slider.addEventListener(
        "input",
        () => {

            state.radius =
                Number(slider.value);

            document
                .getElementById(
                    "radiusValue"
                )
                .textContent =
                `${state.radius} km`;

            const estimated =
                Math.round(
                    36 +
                    state.radius * 5.9
                );

            document
                .getElementById(
                    "reachableDonors"
                )
                .textContent =
                estimated;

        }
    );

}


function renderEmergencies() {

    const container =
        document.getElementById(
            "emergencyList"
        );

    container.innerHTML = "";

    state.emergencies.forEach(
        emergency => {

            const card =
                document.createElement("article");

            card.className =
                "emergency-request glass-card";

            card.innerHTML = `

                <div class="emergency-request-icon">
                    !
                </div>

                <div class="emergency-request-main">

                    <h3>
                        ${emergency.blood}
                        · ${emergency.units} units required
                    </h3>

                    <p>
                        ${emergency.hospital}
                    </p>

                    <div class="emergency-request-meta">

                        <span>
                            ${emergency.urgency}
                        </span>

                        <span>
                            ${emergency.responses}
                            / ${emergency.neededResponses}
                            responses
                        </span>

                    </div>

                </div>

                <div class="emergency-request-action">

                    <strong>
                        ${Math.round(
                            emergency.responses /
                            emergency.neededResponses *
                            100
                        )}%
                    </strong>

                    <button
                        class="danger-button"
                        onclick="broadcastEmergency('${emergency.id}')"
                    >
                        Broadcast
                    </button>

                </div>

            `;

            container.appendChild(card);

        }
    );

}


function broadcastEmergency(id) {

    const emergency =
        state.emergencies.find(
            item => item.id === id
        );

    if (!emergency) return;

    emergency.responses +=
        Math.floor(
            Math.random() * 4
        ) + 1;

    if (
        emergency.responses >
        emergency.neededResponses
    ) {

        emergency.responses =
            emergency.neededResponses;

    }

    addAudit(
        "SOS",
        "Emergency SOS broadcast repeated",
        `${emergency.blood} · ${state.radius} km`
    );

    renderEmergencies();

    showToast(
        `SOS sent to compatible opted-in donor cohort within ${state.radius} km.`,
        "success"
    );

}


/* =========================================================
   SCENARIO SIMULATOR
========================================================= */

function initializeScenario() {

    const reminder =
        document.getElementById(
            "reminderRange"
        );

    const confirmation =
        document.getElementById(
            "confirmationRange"
        );


    function updateScenario() {

        const reminderValue =
            Number(reminder.value);

        const confirmationValue =
            Number(confirmation.value);

        document
            .getElementById(
                "reminderValue"
            )
            .textContent =
            `${reminderValue}%`;

        document
            .getElementById(
                "confirmationValue"
            )
            .textContent =
            `${confirmationValue}%`;

        const result =
            Math.round(
                150 *
                (
                    .35 +
                    (
                        reminderValue / 100
                    ) * .25 +
                    (
                        confirmationValue / 100
                    ) * .40
                )
            );

        document
            .getElementById(
                "scenarioResult"
            )
            .textContent =
            `${Math.min(result,150)} / 150`;

    }


    reminder.addEventListener(
        "input",
        updateScenario
    );

    confirmation.addEventListener(
        "input",
        updateScenario
    );

    updateScenario();


    document
        .getElementById("scenarioButton")
        .addEventListener(
            "click",
            () => {

                navigateTo(
                    "intelligence"
                );

                showToast(
                    "Scenario simulator ready. Adjust the controls to explore a simulated outcome.",
                    "info"
                );

            }
        );

}


/* =========================================================
   ATTENDANCE
========================================================= */

function initializeAttendance() {

    document
        .getElementById(
            "simulateScanButton"
        )
        .addEventListener(
            "click",
            simulateScan
        );


    document
        .getElementById(
            "scanQrButton"
        )
        .addEventListener(
            "click",
            simulateScan
        );


    document
        .getElementById(
            "manualCheckButton"
        )
        .addEventListener(
            "click",
            () => {

                const ticket =
                    prompt(
                        "Enter donor ticket ID:"
                    );

                if (ticket) {

                    showToast(
                        `Ticket ${ticket} verified in prototype mode.`,
                        "success"
                    );

                }

            }
        );

}


function simulateScan() {

    const donor =
        state.donors[
            Math.floor(
                Math.random() *
                state.donors.length
            )
        ];

    state.checkedIn++;

    document
        .getElementById(
            "checkedInCount"
        )
        .textContent =
        state.checkedIn;

    addAudit(
        "QR",
        "Donor pass verified successfully",
        `${donor.name} · ${donor.blood}`
    );

    showToast(
        `Check-in successful! Welcome ${donor.name} (${donor.blood}).`,
        "success"
    );

}


/* =========================================================
   NOTIFICATIONS
========================================================= */

function initializeNotifications() {

    document
        .getElementById(
            "notificationButton"
        )
        .addEventListener(
            "click",
            () => {

                document
                    .getElementById(
                        "notificationPanel"
                    )
                    .classList.toggle(
                        "open"
                    );

            }
        );


    document
        .getElementById(
            "closeNotifications"
        )
        .addEventListener(
            "click",
            () => {

                document
                    .getElementById(
                        "notificationPanel"
                    )
                    .classList.remove(
                        "open"
                    );

            }
        );

}


/* =========================================================
   GLOBAL SEARCH
========================================================= */

function initializeGlobalSearch() {

    const modal =
        document.getElementById(
            "globalSearchModal"
        );


    document
        .getElementById(
            "globalSearchButton"
        )
        .addEventListener(
            "click",
            openGlobalSearch
        );


    document
        .getElementById(
            "commandSearchInput"
        )
        .addEventListener(
            "input",
            filterCommandResults
        );


    document
        .querySelectorAll(
            "[data-command-section]"
        )
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    modal.classList.remove(
                        "open"
                    );

                    navigateTo(
                        button.dataset.commandSection
                    );

                }
            );

        });


    document.addEventListener(
        "keydown",
        event => {

            if (
                (event.ctrlKey || event.metaKey) &&
                event.key.toLowerCase() === "k"
            ) {

                event.preventDefault();

                openGlobalSearch();

            }

            if (
                event.key === "Escape"
            ) {

                modal.classList.remove(
                    "open"
                );

                document
                    .querySelectorAll(
                        ".modal-overlay"
                    )
                    .forEach(
                        item =>
                            item.classList.remove(
                                "open"
                            )
                    );

            }

        }
    );

}


function openGlobalSearch() {

    const modal =
        document.getElementById(
            "globalSearchModal"
        );

    modal.classList.add("open");

    setTimeout(
        () => {

            document
                .getElementById(
                    "commandSearchInput"
                )
                .focus();

        },
        100
    );

}


function filterCommandResults(event) {

    const query =
        event.target.value
            .toLowerCase()
            .trim();

    document
        .querySelectorAll(
            ".command-results button"
        )
        .forEach(button => {

            button.style.display =
                button.textContent
                    .toLowerCase()
                    .includes(query)
                        ? "grid"
                        : "none";

        });

}


/* =========================================================
   DRIVES
========================================================= */

function initializeDrives() {

    document
        .getElementById(
            "driveSearchInput"
        )
        .addEventListener(
            "input",
            renderDrives
        );


    document
        .getElementById(
            "driveStatusFilter"
        )
        .addEventListener(
            "change",
            renderDrives
        );


    document
        .getElementById(
            "driveCityFilter"
        )
        .addEventListener(
            "change",
            renderDrives
        );

}


function renderDrives() {

    const overview =
        document.getElementById(
            "overviewDriveGrid"
        );

    const full =
        document.getElementById(
            "fullDriveGrid"
        );

    if (overview) {

        overview.innerHTML =
            state.drives
                .filter(
                    drive =>
                        drive.status !==
                        "completed"
                )
                .slice(0,3)
                .map(
                    createDriveCard
                )
                .join("");

    }


    if (full) {

        const search =
            document
                .getElementById(
                    "driveSearchInput"
                )
                .value
                .toLowerCase();

        const status =
            document
                .getElementById(
                    "driveStatusFilter"
                )
                .value;

        const city =
            document
                .getElementById(
                    "driveCityFilter"
                )
                .value;


        const drives =
            state.drives.filter(
                drive => {

                    const searchMatch =
                        (
                            drive.title +
                            drive.organiser +
                            drive.city +
                            drive.venue
                        )
                            .toLowerCase()
                            .includes(search);

                    const statusMatch =
                        status === "all" ||
                        drive.status === status;

                    const cityMatch =
                        city === "all" ||
                        drive.city === city;

                    return (
                        searchMatch &&
                        statusMatch &&
                        cityMatch
                    );

                }
            );


        full.innerHTML =
            drives
                .map(
                    createDriveCard
                )
                .join("");

    }

}


function createDriveCard(drive) {

    const percentage =
        Math.min(
            Math.round(
                drive.registered /
                drive.target *
                100
            ),
            100
        );

    return `

        <article class="drive-card glass-card">

            <div class="drive-cover">

                <div class="drive-cover-top">

                    <span class="organiser-badge">
                        ${drive.organiser}
                    </span>

                    ${
                        drive.emergency
                            ? `
                                <span class="emergency-badge">
                                    EMERGENCY
                                </span>
                              `
                            : ""
                    }

                </div>

            </div>

            <div class="drive-body">

                <h3>
                    ${drive.title}
                </h3>

                <div class="drive-meta">

                    <span>
                        ◷ ${drive.date} · ${drive.time}
                    </span>

                    <span>
                        ◉ ${drive.venue}, ${drive.city}
                    </span>

                </div>

                <div class="drive-progress">

                    <div class="drive-progress-top">

                        <span>
                            Target attendance
                        </span>

                        <span>
                            ${drive.registered}/${drive.target}
                        </span>

                    </div>

                    <div class="progress-track">

                        <i
                            style="width:${percentage}%"
                        ></i>

                    </div>

                </div>

                <div class="drive-actions">

                    <button
                        onclick="openDriveDetails('${drive.id}')"
                    >
                        Details
                    </button>

                    <button
                        onclick="shareDrive('${drive.id}')"
                    >
                        Share
                    </button>

                    <button
                        onclick="registerDrive('${drive.id}')"
                    >
                        Register
                    </button>

                </div>

            </div>

        </article>

    `;

}


function openDriveDetails(id) {

    const drive =
        state.drives.find(
            item => item.id === id
        );

    if (!drive) return;

    showToast(
        `${drive.title} · ${drive.city} · ${drive.registered}/${drive.target} registered.`,
        "info"
    );

}


function shareDrive(id) {

    const drive =
        state.drives.find(
            item => item.id === id
        );

    if (!drive) return;

    const link =
        `${location.origin}${location.pathname}#drive-${drive.id}`;

    if (
        navigator.clipboard &&
        navigator.clipboard.writeText
    ) {

        navigator.clipboard.writeText(link);

        showToast(
            "Shareable drive link copied.",
            "success"
        );

    } else {

        showToast(
            `Share link: ${link}`,
            "info"
        );

    }

}


function registerDrive(id) {

    const drive =
        state.drives.find(
            item => item.id === id
        );

    if (!drive) return;

    drive.registered++;

    renderDrives();

    addAudit(
        "DRIVE",
        "Donor registration recorded",
        drive.title
    );

    showToast(
        `Registration added to ${drive.title}.`,
        "success"
    );

}


/* =========================================================
   AUDIT
========================================================= */

function initializeAudit() {

    document
        .getElementById(
            "auditSearch"
        )
        .addEventListener(
            "input",
            renderAudit
        );


    document
        .getElementById(
            "auditType"
        )
        .addEventListener(
            "change",
            renderAudit
        );


    document
        .getElementById(
            "exportAuditButton"
        )
        .addEventListener(
            "click",
            exportAudit
        );

}


function addAudit(
    type,
    description,
    detail
) {

    const now =
        new Date();

    const time =
        now.toLocaleTimeString(
            [],
            {
                hour: "2-digit",
                minute: "2-digit"
            }
        );

    state.audit.unshift({

        time,

        type,

        description,

        detail,

        user:
            state.user
                ? state.user.role
                : "System"

    });

    renderAudit();

}


function renderAudit() {

    const container =
        document.getElementById(
            "auditList"
        );

    const search =
        document
            .getElementById(
                "auditSearch"
            )
            .value
            .toLowerCase();

    const type =
        document
            .getElementById(
                "auditType"
            )
            .value;


    const records =
        state.audit.filter(
            record => {

                const text =
                    (
                        record.description +
                        record.detail +
                        record.user +
                        record.type
                    )
                        .toLowerCase();

                return (
                    text.includes(search) &&
                    (
                        type === "all" ||
                        record.type === type
                    )
                );

            }
        );


    container.innerHTML =
        records
            .map(
                record => `

                    <div class="audit-row">

                        <span class="audit-time">
                            ${record.time}
                        </span>

                        <span class="audit-type ${record.type}">
                            ${record.type}
                        </span>

                        <div class="audit-description">

                            <strong>
                                ${record.description}
                            </strong>

                            <small>
                                ${record.detail}
                            </small>

                        </div>

                        <span class="audit-user">
                            ${record.user}
                        </span>

                    </div>

                `
            )
            .join("");

}


function exportAudit() {

    const header =
        [
            "Time",
            "Type",
            "Description",
            "Detail",
            "User"
        ];

    const rows =
        state.audit.map(
            record => [
                record.time,
                record.type,
                record.description,
                record.detail,
                record.user
            ]
        );


    const csv = [

        header,

        ...rows

    ]
        .map(
            row =>
                row
                    .map(
                        value =>
                            `"${String(value)
                                .replace(/"/g, '""')}"`
                    )
                    .join(",")
        )
        .join("\n");


    const blob =
        new Blob(
            [csv],
            {
                type: "text/csv;charset=utf-8;"
            }
        );

    const url =
        URL.createObjectURL(blob);

    const link =
        document.createElement("a");

    link.href = url;

    link.download =
        "bloodluma-audit-log.csv";

    link.click();

    URL.revokeObjectURL(url);

    showToast(
        "Audit CSV exported.",
        "success"
    );

}


/* =========================================================
   EXTRA ACTIONS
========================================================= */

function initializeActions() {

    document
        .querySelectorAll(
            '[data-action="campaign"]'
        )
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    showToast(
                        "Campaign Generator opened. Poster, QR, WhatsApp and email assets can be generated from this workspace.",
                        "info"
                    );

                }
            );

        });


    document
        .querySelectorAll(
            '[data-action="reports"]'
        )
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    exportAudit();

                }
            );

        });


    document
        .querySelectorAll(
            '[data-action="send-reminders"]'
        )
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    showToast(
                        "Reminder cohort opened. 32 registrants are ready for consent-aware review.",
                        "info"
                    );

                    navigateTo(
                        "communications"
                    );

                }
            );

        });


    document
        .querySelectorAll(
            '[data-action="platform-info"]'
        )
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    showToast(
                        "BloodLuma handles mobilisation, communication, attendance and administrative coordination — not clinical decisions.",
                        "info"
                    );

                }
            );

        });


    document
        .getElementById(
            "broadcastButton"
        )
        .addEventListener(
            "click",
            () => {

                navigateTo(
                    "emergency"
                );

                showToast(
                    "Emergency communication centre opened.",
                    "info"
                );

            }
        );


    document
        .getElementById(
            "profileButton"
        )
        .addEventListener(
            "click",
            logoutMenu
        );


    document
        .getElementById(
            "topUserButton"
        )
        .addEventListener(
            "click",
            logoutMenu
        );

}


function logoutMenu() {

    const leave =
        confirm(
            "Sign out of BloodLuma?"
        );

    if (!leave) return;

    localStorage.removeItem(
        "bloodlumaUser"
    );

    state.user = null;

    document
        .getElementById("app")
        .classList.add("hidden");

    document
        .getElementById("authScreen")
        .classList.remove("hidden");

    showLogin();

    showToast(
        "You have been signed out.",
        "info"
    );

}


/* =========================================================
   COUNTER ANIMATION
========================================================= */

function animateCounters() {

    document
        .querySelectorAll(
            ".counter"
        )
        .forEach(counter => {

            const target =
                Number(
                    counter.dataset.count
                );

            let current = 0;

            const increment =
                Math.max(
                    Math.ceil(
                        target / 50
                    ),
                    1
                );

            const interval =
                setInterval(
                    () => {

                        current +=
                            increment;

                        if (
                            current >=
                            target
                        ) {

                            current =
                                target;

                            clearInterval(
                                interval
                            );

                        }

                        counter.textContent =
                            current.toLocaleString();

                    },
                    20
                );

        });

}


/* =========================================================
   TOAST
========================================================= */

function showToast(
    message,
    type = "info"
) {

    const container =
        document.getElementById(
            "toastContainer"
        );

    const toast =
        document.createElement("div");

    toast.className =
        `toast ${type}`;

    const icon =
        type === "success"
            ? "✓"
            : type === "error"
                ? "!"
                : "✦";

    toast.innerHTML = `

        <strong>
            ${icon}
        </strong>

        <span>
            ${message}
        </span>

    `;

    container.appendChild(toast);

    setTimeout(
        () => {

            toast.style.opacity = "0";

            toast.style.transform =
                "translateX(20px)";

            setTimeout(
                () =>
                    toast.remove(),
                300
            );

        },
        3500
    );

}


/* =========================================================
   RENDER EVERYTHING
========================================================= */

function renderAll() {

    renderDonors();

    renderDrives();

    renderEmergencies();

    renderAudit();

}
