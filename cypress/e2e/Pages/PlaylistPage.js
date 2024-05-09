class PlaylistPage {
  elements = {
    playlistTitle: () => cy.get(".title > .yt-simple-endpoint"),
  }
}

module.exports = new PlaylistPage()
