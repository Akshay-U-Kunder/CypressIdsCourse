import HomePage from "./Pages/HomePage"
import ResultPage from "./Pages/ResultPage"
import PlaylistPage from "./Pages/PlaylistPage"

describe("Page Object Test Suite", () => {
  it("Page Object Test1", () => {
    //Open youtube
    HomePage.visit()

    //Search in Youtube
    HomePage.searchInYoutube()

    //Go to Playlist
    ResultPage.goToPlaylist()

    //Validate the playlist
    PlaylistPage.elements
      .playlistTitle()
      .should("have.text", "API Testing by Testers Talk")
  })
})
