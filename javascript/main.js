const modal = document.getElementById('modal');
const modalShow = document.getElementById('show-modal');
const modalClose = document.getElementById('close-modal');
const bookmarkForm = document.getElementById('bookmark-form');
const websiteNameEl = document.getElementById('website-name');
const websiteUrlEl = document.getElementById('website-url');
const bookmarksContainer = document.getElementById('bookmarks-container');

// Show Modal, focus on Input

function showModal(){
	modal.classList.add('show-modal');
	websiteNameEl.focus();
}

// Modal Event Listeners

modalShow.addEventListener('click', showModal);
modalClose.addEventListener('click', () => modal.classList.remove('show-modal'));
window.addEventListener('click', (e) => (e.target === modal ? modal.classList.remove('show-modal') : false));

// Handle Data from Form
function storeBookmark(e){
	e.preventDefault();
	const nameValue = websiteNameEl.value;
	let urlValue = websiteUrlEl.value;
}

// Event Listener
bookmarkForm.addEventListener('submit', storeBookmark);



// if (!urlValue.includes('https://') && !urlValue.includes('http://')){
// 	urlValue = `https://${urlValue}`;
// }