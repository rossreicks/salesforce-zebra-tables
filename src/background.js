chrome.storage.onChanged.addListener((changes, area) => {
	if (area === "sync" && changes.rowColor) {
		const color = changes.rowColor.newValue;
		chrome.tabs.query({ active: true }, (tabs) => {
			tabs.forEach((tab) => {
				chrome.scripting.insertCSS({
					target: { tabId: tab.id },
					css: `.slds-table tbody tr:nth-child(even) { background-color: ${color} !important; }`,
				});
			});
		});
	}
});
