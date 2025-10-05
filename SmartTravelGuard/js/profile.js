document.addEventListener('DOMContentLoaded', () => {

    const tabs = document.querySelectorAll('.profile-tabs-header .tab');
    const tabContents = document.querySelectorAll('.profile-tab-content');
    const profileForm = document.getElementById('profileForm');

    // Function to handle tab switching
    function switchTab(tabName) {
        // Deactivate all tabs and content
        tabs.forEach(tab => tab.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));

        // Activate the selected tab and content
        const activeTab = document.querySelector(`.profile-tabs-header .tab[data-tab="${tabName}"]`);
        const activeContent = document.getElementById(tabName);
        
        if (activeTab && activeContent) {
            activeTab.classList.add('active');
            activeContent.classList.add('active');
        }
    }

    // Add click event listeners to each tab
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const tabName = tab.getAttribute('data-tab');
            switchTab(tabName);
        });
    });

    // Handle the form submission
    profileForm.addEventListener('submit', async (e) => {
        e.preventDefault(); // Prevent the default form submission

        const formData = new FormData(profileForm);
        const userData = {};
        for (const [key, value] of formData.entries()) {
            userData[key] = value;
        }

        console.log('User data to be sent:', userData);

        // This is where you would make an API call to your backend server
        // The backend server would then connect to MongoDB to save the data.

        // Since I cannot access your server, this is a simulated response.
        try {
            // Uncomment and replace with your actual API endpoint
            /*
            const response = await fetch('/api/profile/update', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)
            });

            if (response.ok) {
                const result = await response.json();
                console.log('Profile updated successfully:', result);
                alert('Changes saved successfully! 🎉');
            } else {
                const error = await response.json();
                console.error('Failed to save changes:', error);
                alert('Failed to save changes. Please try again.');
            }
            */
            
            // --- Simulated success for front-end demonstration ---
            console.log('Simulating successful data save...');
            await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate network delay
            alert('Changes saved successfully! 🎉');
            // You can also update the UI with the saved data if needed
            // For example:
            document.querySelector('.profile-name').innerHTML = `${userData.firstName.toUpperCase()}<br>${userData.lastName.toUpperCase()}`;


        } catch (error) {
            console.error('An error occurred during save:', error);
            alert('An unexpected error occurred. Please check the console for details.');
        }
    });

});