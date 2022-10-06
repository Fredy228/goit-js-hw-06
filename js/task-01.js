const categories = document.querySelectorAll('.item');

console.log('Number of categories:', categories.length);

categories.forEach(category => {
    console.log("Category:", category.firstElementChild.textContent);

    const elements = category.lastElementChild.children;
    console.log("Elements:", elements.length);
});