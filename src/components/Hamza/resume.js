

export function Resume() {

    return (
        <button
        className="large-flat-button"
        onClick={() => {
        // Replace 'your_google_drive_link' with your actual Google Drive link to your resume
        const googleDriveLink = 'https://docs.google.com/document/d/15_qai4uMWPXdEeZPueN4rLQlKn_5N3jgFuiMk2of46Q/edit?usp=sharing';

        // Open the link in a new tab
        window.open(googleDriveLink, '_blank');
        }}
        >
        VIEW RESUME
        </button>
    )
}