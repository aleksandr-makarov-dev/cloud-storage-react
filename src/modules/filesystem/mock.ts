import { FileSystemObject } from "./types";

export const mockFileSystemObjects: FileSystemObject[] = [
  {
    key: "documents/report.pdf",
    eTag: "5d41402abc4b2a76b9719d911017c592",
    isDir: false,
    size: 12500,
    lastModifiedDateTime: "2023-10-05T14:25:00Z",
  },
  {
    key: "images/",
    eTag: "d41d8cd98f00b204e9800998ecf8427e",
    isDir: true,
    size: 0,
    lastModifiedDateTime: "2023-09-15T09:00:00Z",
  },
  {
    key: "images/photo1.jpg",
    eTag: "6f4922f45568161a8cdf4ad2299f6d23",
    isDir: false,
    size: 204800,
    lastModifiedDateTime: "2023-10-20T11:10:00Z",
  },
  {
    key: "images/photo2.jpg",
    eTag: "98f13708210194c475687be6106a3b84",
    isDir: false,
    size: 105400,
    lastModifiedDateTime: "2023-10-20T11:15:00Z",
  },
  {
    key: "music/",
    eTag: "d41d8cd98f00b204e9800998ecf8427e",
    isDir: true,
    size: 0,
    lastModifiedDateTime: "2023-09-01T08:30:00Z",
  },
  {
    key: "music/song.mp3",
    eTag: "c4ca4238a0b923820dcc509a6f75849b",
    isDir: false,
    size: 5120000,
    lastModifiedDateTime: "2023-08-25T15:45:00Z",
  },
  {
    key: "videos/",
    eTag: "d41d8cd98f00b204e9800998ecf8427e",
    isDir: true,
    size: 0,
    lastModifiedDateTime: "2023-07-10T12:00:00Z",
  },
  {
    key: "videos/movie.mp4",
    eTag: "e4da3b7fbbce2345d7772b0674a318d5",
    isDir: false,
    size: 104857600,
    lastModifiedDateTime: "2023-06-30T17:30:00Z",
  },
  {
    key: "archive/",
    eTag: "d41d8cd98f00b204e9800998ecf8427e",
    isDir: true,
    size: 0,
    lastModifiedDateTime: "2023-05-10T10:00:00Z",
  },
  {
    key: "archive/backup.zip",
    eTag: "6512bd43d9caa6e02c990b0a82652dca",
    isDir: false,
    size: 10240000,
    lastModifiedDateTime: "2023-05-09T16:20:00Z",
  },
];
