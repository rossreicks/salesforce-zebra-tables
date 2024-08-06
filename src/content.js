chrome.storage.sync.get("rowColor", (data) => {
	const color = data.rowColor || "#f2f2f2";
    document.head.insertAdjacentHTML('beforeend', `<style>.slds-table tbody tr:nth-child(even) { background-color: ${color}; }</style>`);
});

