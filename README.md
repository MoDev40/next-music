# Database Models Documentation

## Track

Represents an individual track or song.

| Field        | Type            | Description                                      |
|--------------|-----------------|--------------------------------------------------|
| `id`         | String           | Unique identifier for the track.                |
| `title`      | String           | Title of the track.                             |
| `artist`     | String           | Name of the person or group performing the track.|
| `duration`   | Int              | Duration of the track in seconds.               |
| `albumId`    | String?          | Optional ID of the album this track belongs to. |
| `album`      | MusicAlbum?      | Optional relation to the album the track belongs to. |
| `genreId`    | String?          | Optional ID of the genre this track belongs to. |
| `genre`      | MusicGenre?      | Optional relation to the genre this track belongs to. |
| `trackUrl`   | String           | URL location of the track file.                 |
| `trackKey`   | String           | Unique key of the track for storage purposes.   |
| `favorites`  | UserFavorite[]   | List of users who have marked this track as a favorite. |
| `playListTracks` | PlayListTrack[] | List of playlist-track relations including this track. |

---

## MusicAlbum

Represents an album, which is a collection of tracks.

| Field         | Type        | Description                                          |
| ------------- | ----------- | ---------------------------------------------------- |
| `id`          | String      | Unique identifier for the album.                     |
| `title`       | String      | Title of the album.                                  |
| `artist`      | String      | Name of the person or group that released the album. |
| `releaseDate` | DateTime?   | Optional release date of the album.                  |
| `genreId`     | String?     | Optional ID of the genre the album belongs to.       |
| `genre`       | MusicGenre? | Optional relation to the genre the album belongs to. |
| `tracks`      | Track[]     | List of tracks included in this album.               |

---

## UserFavorite

Represents a user's favorite track.

| Field     | Type   | Description                                              |
| --------- | ------ | -------------------------------------------------------- |
| `id`      | String | Unique identifier for the favorite.                      |
| `trackId` | String | ID of the track marked as a favorite.                    |
| `userId`  | String | ID of the user who marked the track as a favorite.       |
| `track`   | Track  | Relation to the track marked as a favorite.              |
| `user`    | User   | Relation to the user who marked the track as a favorite. |

---

## UserPlaylist

Represents a user's playlist, which contains multiple tracks.

| Field            | Type            | Description                                                     |
| ---------------- | --------------- | --------------------------------------------------------------- |
| `id`             | String          | Unique identifier for the playlist.                             |
| `name`           | String          | Name of the playlist.                                           |
| `userId`         | String          | ID of the user who created the playlist.                        |
| `user`           | User            | Relation to the user who created the playlist.                  |
| `playListTracks` | PlayListTrack[] | List of playlist-track relations associated with this playlist. |

---

## PlayListTrack

Represents the relationship between a playlist and a track.

| Field          | Type         | Description                                         |
| -------------- | ------------ | --------------------------------------------------- |
| `id`           | String       | Unique identifier for the playlist-track relation.  |
| `trackId`      | String       | ID of the track in the playlist.                    |
| `track`        | Track        | Relation to the track in the playlist.              |
| `playListId`   | String       | ID of the playlist containing the track.            |
| `userPlaylist` | UserPlaylist | Relation to the playlist.                           |
| `createdAt`    | DateTime     | Timestamp when the track was added to the playlist. |

---

## MusicGenre

Represents a music genre that can be associated with both tracks and albums.

| Field    | Type         | Description                                   |
| -------- | ------------ | --------------------------------------------- |
| `id`     | String       | Unique identifier for the genre.              |
| `name`   | String       | Name of the genre (e.g., Rock, Pop, Hip-Hop). |
| `tracks` | Track[]      | List of tracks associated with this genre.    |
| `albums` | MusicAlbum[] | List of albums associated with this genre.    |

---