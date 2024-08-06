document.addEventListener("DOMContentLoaded", () => {
	const colorInput = document.getElementById("rowColor");
	const saveButton = document.getElementById("save");

	// Load the saved color from storage
	chrome.storage.sync.get("rowColor", (data) => {
		colorInput.value = data.rowColor || "#f2f2f2";
	});

	// Save the selected color to storage
	saveButton.addEventListener("click", () => {
		const color = colorInput.value;
		setColor(color);
	});

    // Reset the color to default
    const resetButton = document.getElementById("reset");

    resetButton.addEventListener("click", () => {
        setColor("#f2f2f2");
    });
});

function setColor (color) {
    chrome.storage.sync.set({ rowColor: color }, () => {
        window.close();
    });
}
