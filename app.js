console.log("Let's get this party started!");

const searchButton = $("#search-button");
const searchField = $("#search-field");
const removeButton = $("#remove-button");
const gifDiv = $("#gif-div");
const giphyForm = $("form");

giphyForm.submit(async function (event) {
    event.preventDefault();
    let searchString = searchField.val();
    const result = await axios.get("http://api.giphy.com/v1/gifs/random", {
        params: {
            api_key: APIKEY,
            tag: searchString
        }
    });
    createGif(result.data.data.images.original.url);
});

function createGif(url) {
    gifDiv.append($("<img>").attr("src", url));
}

removeButton.on("click", function () {
    gifDiv.empty()
})