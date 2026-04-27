const personForm = document.getElementById('person-form');
const profilesContainer = document.getElementById('profiles-container');

//Load profiles when the page starts
window.addEventListener('load', displayProfiles);

//Listen Submit event
personForm.addEventListener('submit', function(e){
    e.preventDefault(); //Prevents the page from refreshing

    // 1. Get the Name
    const name = document.getElementById('person-name').value;

    // 2. Automatically grab ALL inputs that start with "m-" 
    const measurements = {};
    const allInputs = personForm.querySelectorAll('input[id^="m-"]');
    
    allInputs.forEach(input => {
        // We use the ID (minus the "m-") as the key in our object
        const measureName = input.id.replace('m-', '');
        measurements[measureName] = input.value;
    });

    // 3. Create the profile object
    const profile = { name, measurements };

    // 4. Save to LocalStorage (Free database inside your browser)
    saveProfile(profile);

    // 5. Refresh the list and reset form
    displayProfiles();
    personForm.reset();
    alert("Profile saved successfully!");
});

function saveProfile(profile) {
    // Get existing profiles or empty array
    let profiles = JSON.parse(localStorage.getItem('sewing_profiles')) || [];
    profiles.push(profile);
    localStorage.setItem('sewing_profiles', JSON.stringify(profiles));
}

function displayProfiles() {
    let profiles = JSON.parse(localStorage.getItem('sewing_profiles')) || [];
    
    if (profiles.length === 0) {
        profilesContainer.innerHTML = '<p>No profiles saved yet.</p>';
        return;
    }

    profilesContainer.innerHTML = ''; // Clear current list
    
    profiles.forEach((p, index) => {
        const div = document.createElement('div');
        div.className = 'profile-card';
        div.innerHTML = `
            <span><strong>${p.name}</strong> (${Object.keys(p.measurements).length} measures)</span>
            <button onclick="viewProfile(${index})" style="width: auto; margin: 0; padding: 5px 10px;">View Info</button>
        `;
        profilesContainer.appendChild(div);
    });
}

// Function to view info in the console for now
function viewProfile(index) {
    let profiles = JSON.parse(localStorage.getItem('sewing_profiles'));
    console.log("Full details for:", profiles[index]);
    alert("Check the browser console (F12) to see all measures for " + profiles[index].name);
}
