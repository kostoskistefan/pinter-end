function clean_helper(parent_id, element_class) {
    let google_results_parent = document.querySelector(parent_id);

    let google_results = google_results_parent.querySelectorAll(element_class)

    google_results.forEach(element => {
        let element_links = element.querySelectorAll('a');

        element_links.forEach(tag => {
            let pinterest_matches = ["https://pinterest", "https://www.pinterest"]

            let url_contains_pinterest = false;

            pinterest_matches.forEach(match => {
                if (tag.href.indexOf(match) != -1)
                    url_contains_pinterest = true;
            })

            if (url_contains_pinterest)
                element.remove();
        });
    });
}

function regular_search_cleaner() {
    clean_helper("#center_col", ".g");
}

function image_search_cleaner() {
    clean_helper("#islrg", ".isv-r");
}

chrome.storage.local.get("enabled", data => {
    if (data.enabled) {
        let is_image_search = window.location.href.indexOf('tbm') != -1

        if (is_image_search)
            image_search_cleaner();

        else regular_search_cleaner();
    }
});