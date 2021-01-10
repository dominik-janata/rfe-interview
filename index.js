function getPageHash() {
	var hash = window.location.hash;
	if (hash !== null && typeof(hash) === "string" && hash.length > 0) {
		return hash.substring(1);
	} else {
		throw new Error("Empty or invalid hash value: '" + hash + "'.");
	}
}

function getTagsFromPageHash(pageHash) {
	return pageHash.split("=")[1].split(",");
}

function updateTagsList(tagsArr) {
	var tagsEl = document.getElementById("tags-list");
	tagsEl.innerHTML = "";
	var listItemMarkups = tagsArr.map(function(tag) {
		return "<li>" + tag + "</li>";
	});
	tagsEl.innerHTML = listItemMarkups.join("\n");
}

function processHashUpdate() {
	var hash = getPageHash();
	console.dir(getTagsFromPageHash(hash));
	updateTagsList(getTagsFromPageHash(hash));
}

document.addEventListener("DOMContentLoaded", processHashUpdate);

window.addEventListener("hashchange", processHashUpdate, false);
