// Our sample data
const data = [
    {
        name: 'John Doe',
        age: 32,
        gender: 'male',
        lookingfor: 'female',
        location: 'Boston MA',
        image: 'https://randomuser.me/api/portraits/men/82.jpg'
    },
    {
        name: 'Jen Smith',
        age: 27,
        gender: 'female',
        lookingfor: 'male',
        location: 'Miami, FL',
        image: 'https://randomuser.me/api/portraits/women/82.jpg'
    },
    {
        name: 'William Johnson',
        age: 40,
        gender: 'male',
        lookingfor: 'female',
        location: 'Lynn MA',
        image: 'https://randomuser.me/api/portraits/men/83.jpg'
    },
];

// First pass our profile data to our profile iterator
const profiles = profileIterator(data);

// Call first profile automatically
nextProfile();

// Event listener - listens for click of the next button
document.getElementById('next').addEventListener('click', nextProfile);

// Now display profile
function nextProfile() {
    // Call our iterator
    const currentProfile = profiles.next().value;

    if (currentProfile !== undefined) {
        // Create the profile display HTML
        document.getElementById('profileDisplay').innerHTML = `
        <ul class="list-group">
            <li class="list-group-item">Name: ${currentProfile.name}</li>
            <li class="list-group-item">Age: ${currentProfile.age}</li>
            <li class="list-group-item">Location: ${currentProfile.location}</li>
            <li class="list-group-item">Preference: ${currentProfile.gender} looking for ${currentProfile.lookingfor}</li>
        </ul>
        `;

        // Display profile image on page
        document.getElementById('imageDisplay').innerHTML = `<img src="${currentProfile.image}">`
    } else {
        // No more profiles
        window.location.reload();
    }
    
}


// Profile Iterator
function profileIterator(profiles) {
    let nextIndex = 0;

    // Return an object with a next function
    return {
        next: function() {
            // Return either the value or done
            // If nextIndex is less than length of profiles (3 in this case), then return the next profile, set done to false as we haven't reached the end of the object we're iterating yet
            return nextIndex < profiles.length ? 
            { value: profiles[nextIndex++], done: false } : 
            { done: true }
        }
    };
}
