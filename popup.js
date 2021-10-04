var enabled = true;

var enable_button = document.getElementById("enable_button");
var disable_button = document.getElementById("disable_button");

function toggle_extension(value) {
    enabled = value;
    chrome.storage.local.set({ enabled: enabled });
}

chrome.storage.local.get('enabled', data => {
    enabled = !!data.enabled;
    enable_button.checked = enabled;
    disable_button.checked = !enabled;
});

enable_button.onclick = () => { toggle_extension(true) };

disable_button.onclick = () => { toggle_extension(false) };